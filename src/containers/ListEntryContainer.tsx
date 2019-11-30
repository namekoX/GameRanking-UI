import { Action } from 'typescript-fsa';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ListEntry } from '../components/ListEntry';
import { ListEntryActions, getListEntry } from '../actions/ListEntryActions';
import Const from '../common/const';
import { MenuActions } from '../actions/MenuActions';

export interface Actions {
  updateState: (value: any, name: string) => Action<{ name: string, value: any }>,
  updateStateMenu: (value: any, name: string) => Action<{ name: string, value: any }>,
  onPrev: () => Action<{}>,
  onAfter: () => Action<{}>,
  onSearch: (platform: string, month: Date) => void,
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateState: (value: any, name: string) => dispatch(ListEntryActions.updateState({ name, value })),
    updateStateMenu: (value: any, name: string) => dispatch(MenuActions.updateState({ name, value })),
    onPrev:() => dispatch(ListEntryActions.onPrev({})),
    onAfter:() => dispatch(ListEntryActions.onAfter({})),
    onSearch: async (platform: string, month: Date) => {
      dispatch(ListEntryActions.updateState({ name: "loading", value: true }));
      await dispatch(getListEntry(Const.GET_LIST_ENTRY_URL, platform, month))
      dispatch(ListEntryActions.updateState({ name: "loading", value: false }));
    },
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.ListEntry);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEntry);
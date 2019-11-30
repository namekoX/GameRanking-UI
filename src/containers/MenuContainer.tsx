import { connect } from 'react-redux';
import { AppState } from '../store';
import { push } from 'connected-react-router';
import Const from '../common/const';
import { MenuActions } from '../actions/MenuActions';
import { Menu } from '../components/Menu';
import { Action } from 'redux';

export interface Actions {
  onSelect: (url: string) => void,
  updateState: (value: any, name: string) => Action<{ name: string, value: any }>,
}

function mapDispatchToProps(dispatch: any) {
  return {
    onSelect: (url: string) => {
      dispatch(MenuActions.updateState({ name: "selectedKey", value: url }));
      dispatch(push(Const.SITE_ROOT + url));
    },
    updateState: (value: any, name: string) => dispatch(MenuActions.updateState({ name, value })),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.MenuState);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
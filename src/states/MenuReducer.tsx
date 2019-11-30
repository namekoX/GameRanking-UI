import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { MenuActions } from '../actions/MenuActions';
import Const from '../common/const';

export interface MenuState {
  selectedKey: string
}

export const Default: MenuState = {
  selectedKey: Const.MENU_DMM_URL
};

export const MenuReducer = reducerWithInitialState(Default)
  .case(MenuActions.updateState, (state, { name, value }) => {
    return Object.assign({}, state, { [name]: value });
  })
  ;
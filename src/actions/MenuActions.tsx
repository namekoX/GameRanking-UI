import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const MenuActions = {
    updateState: actionCreator<{ name: string, value: any }>('ACTIONS_MENU_UPDATE_STATE'),
};
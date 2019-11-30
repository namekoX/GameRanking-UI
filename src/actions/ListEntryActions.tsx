import actionCreatorFactory from 'typescript-fsa';
import GetListEntryResult from '../interface/GetListEntryResult';
import GetListEntryRequest from '../interface/GetListEtntryRequest';
import { createURL } from '../common/utils';
import axios from 'axios';
import { AppState } from '../store';
import { Dispatch, Action } from 'redux';

const actionCreator = actionCreatorFactory();

const onSearch = actionCreator<GetListEntryResult>('ACTIONS_LIST_SEARCH');

export const getListEntry = (url: string, platform: String, month: Date) => {
  const prams: GetListEntryRequest = {
    pratform: platform,
    month: month.getFullYear() + "-" + (month.getMonth() + 1),
  }
  return async (dispatch: Dispatch<Action>, getState: () => AppState) => {
    try {
      const response = await axios.get(createURL(url, prams));
      const result: GetListEntryResult = {
        results: response.data,
        valid: false,
        validMsg: "",
      };
      dispatch(onSearch(result));
    } catch {
      const result: GetListEntryResult = {
        results: [],
        valid: true,
        validMsg: "データ取得で想定外のエラーが発生しました",
      };
      dispatch(onSearch(result));
    }
  };
};

export const ListEntryActions = {
  updateState: actionCreator<{ name: string, value: any }>('ACTIONS_LIST_ENTRY_UPDATE_STATE'),
  onPrev: actionCreator<{}>('ACTIONS_LIST_ENTRY_ON_PREV'),
  onAfter: actionCreator<{}>('ACTIONS_LIST_ENTRY_ON_AFTER'),
  onSearch,
};
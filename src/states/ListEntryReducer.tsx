import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ListEntryActions } from '../actions/ListEntryActions';
import GetListEntryResult from '../interface/GetListEntryResult';

export interface ListEntryState {
  month: Date;
  yearMonth: string;
  platform: string;
  entry: GetListEntryResult;
  loading:boolean;
}

export const listEntryDefault: ListEntryState = {
  month: new Date(Date.parse('2020/08/01 00:00:00')),
  yearMonth: createYearMonth(new Date(Date.parse('2020/08/01 00:00:00'))),
  platform: "",
  loading:false,
  entry: {
    valid: false,
    validMsg: "",
    results: [],
  },
};

function createYearMonth(month:Date){
  return month.getFullYear() + "年" + (month.getMonth() + 1) + "月";
}

export const ListEntryReducer = reducerWithInitialState(listEntryDefault)
  .case(ListEntryActions.updateState, (state, { name, value }) => {
    return Object.assign({}, state, { [name]: value });
  })
  .case(ListEntryActions.onSearch, (state, payload) => {
    return Object.assign({}, state, {
      entry: payload,
    });
  })
  .case(ListEntryActions.onPrev, (state, { }) => {
    let date = state.month;
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    return Object.assign({}, state, { 
      month: date,
      yearMonth:createYearMonth(date),
     });
  })
  .case(ListEntryActions.onAfter, (state, { }) => {
    let date = state.month;
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    return Object.assign({}, state, { 
      month: date,
      yearMonth:createYearMonth(date),
    });
  })
  ;

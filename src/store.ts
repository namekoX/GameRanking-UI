import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createBrowserHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { ListEntryState , ListEntryReducer} from './states/ListEntryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactGA from 'react-ga';
import { getGAID } from './common/utils';
import { MenuState, MenuReducer } from './states/MenuReducer';

export const history = createBrowserHistory();
ReactGA.initialize(getGAID());

history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

export type AppState = {
  ListEntry: ListEntryState,
  MenuState:MenuState,
  router: RouterState,
};

const store = createStore(
  combineReducers<AppState>({
    MenuState: MenuReducer,
    ListEntry: ListEntryReducer,
    router: connectRouter(history),
  }),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history), logger))
);

export default store;
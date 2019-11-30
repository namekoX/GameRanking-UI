import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store , {history} from './store';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { ConnectedRouter } from 'connected-react-router';
import { App } from './App';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();

import React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

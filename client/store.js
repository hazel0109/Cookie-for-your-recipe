import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './redux/reducers';

// import reducers from './reducers/index';
// import { loadMarkets } from './actions/actions';

const store = createStore(reducers, composeWithDevTools());

export default store;

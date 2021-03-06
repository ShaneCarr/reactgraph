import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// loads all reducers
import rootreducer from './reducer';
const initialstate={};
const middleware = [thunk];
const store = createStore(rootreducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))
export default store;
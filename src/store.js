import { createStore, applyMiddleware } from 'redux';
import reducer from './redux';
import thunk from 'redux-thunk';
//TODO add middleware

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

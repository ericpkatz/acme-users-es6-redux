import { createStore } from 'redux';
import reducer from './redux';
//TODO add middleware

const store = createStore(reducer);

export default store;

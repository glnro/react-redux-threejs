import { combineReducers } from 'redux';
import counterReducer from './counter/CounterReducer';

const RootReducer = combineReducers({
  counterReducer
});

export default RootReducer;

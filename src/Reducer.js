import { combineReducers } from 'redux';
import counterReducer from './counter/CounterReducer';
import sceneReducer from './scene/SceneReducer';

const RootReducer = combineReducers({
  counterReducer,
  sceneReducer
});

export default RootReducer;

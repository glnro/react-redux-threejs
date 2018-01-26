import { ADD_CUBE } from './SceneActionTypes';
import Cube from '../geometry/Cube';

const initialState = {
  cubes: []
}

const sceneReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CUBE:
      let newCube = Cube()
      let id = newCube.id
      const newCubes
      const newState = [...state]
      return {...state, cubes: newCubes }
    default:
      return state
  }
}

export default sceneReducer;

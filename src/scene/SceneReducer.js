import { ADD_CUBE } from './SceneActionTypes';
import Cube from '../geometry/Cube';

const initialState = {
  cubes: []
}

const sceneReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CUBE:
      let newCube = Cube()
      let cubeObj = {id: newCube.uuid, geometry: newCube}
      let newState = [...state.cubes, cubeObj]
      return {...state, cubes: newState }
    default:
      return state
  }
}

export default sceneReducer;

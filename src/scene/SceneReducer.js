import { ADD_CUBE } from './SceneActionTypes';
import Cube from '../geometry/Cube';

const initialState = {
  cubes: []
}

const sceneReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CUBE:
      let newCube = Cube()
      newCube.position.x = (Math.random() * 5) - 5/2
      newCube.position.y = (Math.random() * 5) - 5/2
      newCube.position.z = (Math.random() * 5) - 5/2
      let cubeObj = {id: newCube.uuid, geometry: newCube}
      let newState = [...state.cubes, newCube]
      console.log("STATE.CUBES")
      console.log(newState)

      return {...state, cubes: newState }
    default:
      return state
  }
}

export default sceneReducer;

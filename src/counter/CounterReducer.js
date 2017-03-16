const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const initialState = {
    counterValue: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT_COUNTER:
      let newValue = state.counterValue += 1
      return {...state, counterValue: newValue}
    default:
      return state
  }
}

export default counterReducer

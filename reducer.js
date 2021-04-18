import { actionTypes } from './actions'

const initState = {
  email: null
}

function reducer(state = initState, action) {
  switch (action.type){
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.email,
      }
    }
    default:
      return state
  }
}

export default reducer;
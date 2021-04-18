// Action Types
export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL'
}

// Action Creator
export function login(email, password) {
  return {
    type: actionTypes.LOGIN,
    email, 
    password
  }
}

export function loginSuccess( email ) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    email
  }
}

export function loginFail() {
  return {
    type: actionTypes.LOGIN_FAIL
  }
}

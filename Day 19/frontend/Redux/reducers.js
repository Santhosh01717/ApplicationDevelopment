// reducers.js
const initialState = {
    username: '',
    password: '',
    errors: {},
    isSubmitted: false,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USERNAME':
        return { ...state, username: action.username };
      case 'UPDATE_PASSWORD':
        return { ...state, password: action.password };
      case 'CLEAR_ERRORS':
        return { ...state, errors: {} };
      case 'SET_ERRORS':
        return { ...state, errors: action.errors };
      case 'SET_SUBMITTED':
        return { ...state, isSubmitted: true };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  
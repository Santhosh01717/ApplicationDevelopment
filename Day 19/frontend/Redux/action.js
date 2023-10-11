// actions.js
export const updateUsername = (username) => ({
    type: 'UPDATE_USERNAME',
    username,
  });
  
  export const updatePassword = (password) => ({
    type: 'UPDATE_PASSWORD',
    password,
  });
  
  export const clearErrors = () => ({
    type: 'CLEAR_ERRORS',
  });
  
  export const setErrors = (errors) => ({
    type: 'SET_ERRORS',
    errors,
  });
  
  export const setSubmitted = () => ({
    type: 'SET_SUBMITTED',
  });
  
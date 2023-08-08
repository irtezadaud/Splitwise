const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authErrorRegister: null,
        authErrorLogin: action.err.message
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authErrorRegister: null,
        authErrorLogin: null
      };
    case "SIGNUP_SUCESS":
      return {
        ...state,
        authErrorRegister: null,
        authErrorLogin: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authErrorRegister: action.err.message,
        authErrorLogin: null
      };
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        authResetPassword: true,
        authErrorRegister: null,
        authErrorLogin: null
      };
    case "RESET_PASSWORD_ERROR":
      return {
        ...state,
        authResetPassword: false,
        authErrorRegister: null,
        authErrorLogin: null
      };
    default:
      return state;
  }
};

export default authReducer;

const initState = {};

const contactUsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONTACT_SUCCESS":
      return {
        ...state,
        contactSuccess: action.refNo,
        contactError: null
      };
    case "CONTACT_ERROR":
      return {
        ...state,
        contactSuccess: null,
        contactError: action.err.message
      };
    default:
      return state;
  }
};

export default contactUsReducer;

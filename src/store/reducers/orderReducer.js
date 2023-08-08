const initState = {};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ORDER_SUCCESS":
      return {
        ...state,
        orderDetails: action.data,
        orderError: null
      };
    case "ORDER_ERROR":
      return {
        ...state,
        orderDetails: null,
        orderError: action.err.message
      };
    default:
      return state;
  }
};

export default orderReducer;

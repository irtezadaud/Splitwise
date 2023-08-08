const initState = {
  cartError: null,
  cart: []
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "CART_SUCCESS":
      const productDetails = {
        productId: action.productId,
        product: action.data,
        qty: 1,
        price: 0.0
      };

      const foundInArray = state.cart
        .map(value => {
          return value.productId;
        })
        .indexOf(action.productId);

      if (foundInArray !== -1) {
        const productItems =
          state.cart &&
          state.cart.map(product => {
            if (product.productId === action.productId) {
              Object.assign({}, product, { qty: product.qty++ });
            }
            return product;
          });

        return {
          cart: productItems,
          cartError: null
        };
      } else {
        return {
          cart: [...state.cart, productDetails],
          cartError: null
        };
      }

    case "CART_ERROR":
      return {
        ...state,
        cartError: action.err.message
      };
    default:
      return state;
  }
};

export default cartReducer;

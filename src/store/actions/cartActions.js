export const addToCart = productId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("products")
      .doc(productId)
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          dispatch({ type: "CART_SUCCESS", productId, data });
        }
      })
      .catch(err => {
        dispatch({ type: "CART_ERROR", err });
      });
  };
};

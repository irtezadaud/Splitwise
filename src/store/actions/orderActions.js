import { refNo, status } from "../../config/types";

export const createOrder = (cart, deliveryAddress, userId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("orders")
      .add({
        orderNo: refNo.ORDER_NO + new Date().getTime(),
        user: userId,
        orderDetails: cart,
        deliveryAddress: deliveryAddress,
        totalPrice: "0.00",
        orderStatus: status.NEW,
        createdDate: new Date().getTime(),
        modifiedDate: new Date().getTime()
      })
      .then(resp => {
        firestore
          .collection("orders")
          .doc(resp.id)
          .get()
          .then(doc => {
            if (doc.exists) {
              const data = doc.data();
              dispatch({ type: "ORDER_SUCCESS", data });
            }
          });
      })
      .catch(err => {
        dispatch({ type: "ORDER_ERROR", err });
      });
  };
};

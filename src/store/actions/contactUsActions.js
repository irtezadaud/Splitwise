import { refNo, status } from "../../config/types";

export const contactUs = anonymousUser => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("contactus")
      .add({
        refNo: refNo.REF_NO + new Date().getTime(),
        name: anonymousUser.name,
        email: anonymousUser.email,
        contactNumber: anonymousUser.contactNumber,
        contactStatus: status.NEW,
        contactDate: new Date()
      })
      .then(resp => {
        firestore
          .collection("contactus")
          .doc(resp.id)
          .get()
          .then(doc => {
            if (doc.exists) {
              const refNo = doc.data().refNo;
              dispatch({ type: "CONTACT_SUCCESS", refNo });
            }
          });
      })
      .catch(err => {
        dispatch({ type: "CONTACT_ERROR", err });
      });
  };
};

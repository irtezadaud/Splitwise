export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
            contactNumber: newUser.contactNumber
          });
      })
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification();
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const forgotPassword = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .sendPasswordResetEmail(credentials.email)
      .then(() => {
        dispatch({ type: "RESET_PASSWORD_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "RESET_PASSWORD_ERROR", err });
      });
  };
};

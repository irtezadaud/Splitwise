export const setLocale = lang => {
  return (dispatch, getState) => {
    dispatch({ type: "LOCALE_SET", lang });
  };
};

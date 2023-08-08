const initState = {
  lang: "en"
};
const localeReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOCALE_SET":
      return {
        ...state,
        lang: action.lang
      };
    default:
      return state;
  }
};

export default localeReducer;

export const initialState = {
  term: null,
};

const reducer = (state, action) => {
  // console.log("I am action", action);

  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;

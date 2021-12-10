const defaultState = {
  count: [],
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Increase":
      console.log(action.payload);
      break;

    case "Decrease":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default countReducer;

import action from "./action";

const defaultState = {
  count: 0,
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Increase":
      return {
        ...state,
        count: state.count + 1,
      };

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

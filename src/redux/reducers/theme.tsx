import { AllActions } from "../action";

type DefaultState = {
  theme: "light" | "dark";
};

const defaultState: DefaultState = {
  theme: "light",
};

const themeReducer = (
  state = defaultState,
  action: AllActions
): DefaultState => {
  switch (action.type) {
    case "Change_to_Dark":
      return {
        ...state,
        theme: "dark",
      };
    case "Change_to_Light":
      return {
        ...state,
        theme: "light",
      };
    default:
      return state;
  }
};

export default themeReducer;

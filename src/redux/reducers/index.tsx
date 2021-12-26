import { combineReducers } from "redux";

import themeReducer from "./theme";
import countReducer from "./country";

const rootReducer = combineReducers({ themeReducer, countReducer });

export type Store = ReturnType<typeof rootReducer>;

export default rootReducer;

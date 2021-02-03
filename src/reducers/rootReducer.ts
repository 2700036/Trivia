import { combineReducers } from "redux";
import trivia from "./trivia";

export const rootReducer = combineReducers({trivia});

export type RootState = ReturnType<typeof rootReducer>;

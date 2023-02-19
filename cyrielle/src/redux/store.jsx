import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import correctPairsReducer from "./Reducers/correctPairsReducer";
import gameStatusReducer from "./Reducers/gameStatusReducer";

const rootReducer = combineReducers({
    correctPairsReducer,
    gameStatusReducer
})

export const store = configureStore(rootReducer);
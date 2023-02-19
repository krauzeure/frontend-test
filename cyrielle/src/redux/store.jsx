import { configureStore } from "@reduxjs/toolkit";

import correctPairsReducer from "./Reducers/correctPairsReducer";
import gameStatusReducer from "./Reducers/gameStatusReducer";

export const store = configureStore({
    reducer:{
        correctPairsReducer,
        gameStatusReducer
     }
});
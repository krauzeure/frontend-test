import { configureStore } from "@reduxjs/toolkit";

import correctPairsReducer from "./Reducers/correctPairsReducer";
import gameStatusReducer from "./Reducers/gameStatusReducer";
import cardsShownReducer from "./Reducers/cardShownReducer";

export const store = configureStore({
    reducer:{
        correctPairsReducer,
        gameStatusReducer,
        cardsShownReducer
     }
});
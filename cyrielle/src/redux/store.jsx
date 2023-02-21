import { configureStore } from "@reduxjs/toolkit";

import correctPairsReducer from "./Reducers/correctPairsReducer";
import gameStatusReducer from "./Reducers/gameStatusReducer";
import cardsShownReducer from "./Reducers/cardShownReducer";
import gameBoardReducer from "./Reducers/gameBoardReducer";

export const store = configureStore({
    reducer:{
        correctPairsReducer,
        gameStatusReducer,
        cardsShownReducer,
        gameBoardReducer
     }
});
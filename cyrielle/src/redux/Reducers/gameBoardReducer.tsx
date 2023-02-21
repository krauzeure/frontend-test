import { CardType } from "../../Types/types"

const INITIAL_STATE: { gameBoard: [CardType], turnedCards: number[]} = {
    gameBoard: [{isDisabled: false, name: "", image: "", isHidden: true}],
    turnedCards: []
}

function gameBoardReducer(state = INITIAL_STATE, action:{ type: string, payload: any }) {

    switch(action.type) {
        case 'DRAWBOARD': {
            return {
                ...state,
                gameBoard: action.payload
            }
        } 
        case 'TURNCARD': {
            const newBoard = state.gameBoard.map((item, index) => ({
                ...item,
                isHidden: action.payload === index ? false : state.gameBoard[index].isHidden,
            }))
        
            return { 
                ...state,
                gameBoard: newBoard,
                turnedCards: [...state.turnedCards, action.payload]
            }
        }
        case 'CHECKPAIRS': {
            console.log(state.turnedCards)
            let newBoard;
            if(state.turnedCards.length === 2) {
                if(state.gameBoard[state.turnedCards[0]].name === state.gameBoard[state.turnedCards[1]].name) {
                    newBoard = state.gameBoard.map((item, index) => ({
                        ...item,
                        isHidden: index === state.turnedCards[0] || index === state.turnedCards[1]? false : state.gameBoard[index].isHidden
                    }))
                    console.log("paire")
                } else {
                    newBoard = state.gameBoard.map((item, index) => ({
                        ...item,
                        isHidden: index === state.turnedCards[0] || index === state.turnedCards[1]? true : state.gameBoard[index].isHidden
                    }))
                    console.log("dommage")
                }
                return { 
                    ...state,
                    // returning the new board and emptying the turnedCards array
                    gameBoard: newBoard,
                    turnedCards: []
                }
            } else {
                // If there's only 1 turned card we return the board as is
                return {
                    ...state,
                    gameBoard: [...state.gameBoard]
                }
            }
        }
        case 'DISABLEBOARD': {
            const newBoard = state.gameBoard.map((item) => ({
                ...item,
                isDisabled: true
            }))
            return {
                ...state,
                gameBoard: newBoard
            }
        }

        case 'ABLEBOARD': {
            const newBoard = state.gameBoard.map((item) => ({
                ...item,
                isDisabled: false
            }))
            return {
                ...state,
                gameBoard: newBoard
            }
        }
    }

    return state;

}

export default gameBoardReducer;
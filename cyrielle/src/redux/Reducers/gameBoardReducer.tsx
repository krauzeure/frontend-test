const INITIAL_STATE = {
    gameBoard: []
}

function gameBoardReducer(state = INITIAL_STATE, action:{ type: string, payload: any }) {

    switch(action.type) {
        case 'DRAWBOARD': {
            return {
                ...state,
                gameBoard: action.payload
            }
        } 
        case 'EDITBOARD': {
            const newBoard = state.gameBoard.map((item, index) => ({
                // @ts-ignore
                ...item,
                isHidden: index < 2 ? false : true,
            }))

            console.log('NEWBOARD', newBoard)

            return { 
                ...state, //copying the orignal state
                gameBoard: newBoard //reassingning todos to new array
            }
        }
        // case 'TURNCARD': {
        //     state.gameboard[0].isHidden = false
        //     return { 
        //         ...state, 
        //         gameBoard: test
        //      }
        // }
    }

    return state;

}

export default gameBoardReducer;
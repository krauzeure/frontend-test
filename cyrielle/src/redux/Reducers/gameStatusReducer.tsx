const INITIAL_STATE: {status: string} = {
    status: "notstarted"
}

function gameStatusReducer(state = INITIAL_STATE, action:{ type: string }) {

    switch(action.type) {
        case 'STARTGAME': {
            return {
                ...state,
                status: "ongoing"
            }
        }
        case 'TIMEOVER': {
            return {
                ...state,
                status: "lost"
            }
        }
        case 'WON': {
            return {
                ...state,
                status: "won"
            }
        }
        case 'NOTSTARTED': {
            return {
                ...state,
                status: "notstarted"
            }
        }
    }

    return {
        ...state
    }

}

export default gameStatusReducer;
const INITIAL_STATE: {status: string, progress: number} = {
    status: "notstarted",
    progress: 0
}

function gameStatusReducer(state = INITIAL_STATE, action:{ type: string | number }) {

    switch(action.type) {
        case 'TIME': {
            let newProgress = state.progress + 2
            return {
                ...state,
                progress: newProgress
            }
        }
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
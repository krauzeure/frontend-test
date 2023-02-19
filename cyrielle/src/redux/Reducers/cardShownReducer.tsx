const INITIAL_STATE = {
    cardNames: []
}

function cardsShownReducer(state = INITIAL_STATE, action:{ type: string, payload: string }) {

    switch(action.type) {
        case 'FIRSTCARD': {
            return {
                ...state,
                cardNames: [...state.cardNames, action.payload]
            }
        }
    }

    return state;

}

export default cardsShownReducer;
const INITIAL_STATE: {cardNames:number[]} = {
    cardNames: []
}

function cardsShownReducer(state = INITIAL_STATE, action:{ type: string, payload: number }) {

    switch(action.type) {
        case 'SHOWCARD': {
            return {
                ...state,
                cardNames: [...state.cardNames, action.payload]
            }
        }
    }

    return state;

}

export default cardsShownReducer;
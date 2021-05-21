import ActionType from "./globalActionType"

const globalState = {
    layoutIsBlocked: false
}

//Reducer
const globalReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.LAYOUT_BLOCK:
            return {
                ...state,
                layoutIsBlocked: true
            }
        case ActionType.LAYOUT_UNBLOCK:
            return {
                ...state,
                layoutIsBlocked: false
            }
        default:
            return state
    }
}

export default globalReducer
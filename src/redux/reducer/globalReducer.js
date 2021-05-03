import ActionType from "./globalActionType"

const globalState = {
    username: 'ok',
    password: 'ok'
}

//Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_USERNAME:
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}

export { rootReducer }
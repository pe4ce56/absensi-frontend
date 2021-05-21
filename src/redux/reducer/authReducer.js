import ActionType from "./globalActionType"

const authState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user'))
}

const authReducer = (state = authState, action) => {
    switch (action.type) {
        case ActionType.UPDATE_USERDATA: {
            return {
                isAuthenticated: action.isAuthenticated,
                token: action.token,
                user: action.user
            }
        }

        case ActionType.RESET_USERDATA: {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            return {
                isAuthenticated: false,
                token: null,
                user: null
            }
        }

        default:
            return state
    }
}

export default authReducer
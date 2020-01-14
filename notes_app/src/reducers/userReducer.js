import { 
        USER_AUTH_POST
        } from '../actions/types'

const initialState = {
    user: null,
    loggedIn: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case USER_AUTH_POST:
            return {
                ...state,
                user: action.payload,
                loggedIn: action.loggedIn
            }

        default:
            return state
    }
}
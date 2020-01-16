import { USER_AUTH_POST } from '../actions/types'
import { FETCH_NOTES } from '../actions/types'

const initialState = {
    user: null,
    userId: 0,
    loggedIn: false,
    notes: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case USER_AUTH_POST:
            return {
                ...state,
                user: action.payload.data.User,
                userId: action.payload.data.User.user_id,
                loggedIn: action.loggedIn
            }
        case FETCH_NOTES:
            console.log(action.payload.data, "Fetch Notes")
            return {
                ...state,
                notes: action.payload.data
            }
        default:
            return state
    }
}
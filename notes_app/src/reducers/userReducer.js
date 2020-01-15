import { USER_AUTH_POST } from '../actions/types'
import { FETCH_NOTES } from '../actions/types'

const initialState = {
    user: null,
    loggedIn: false,
    notes: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case USER_AUTH_POST:
            return {
                ...state,
                user: action.payload,
                loggedIn: action.loggedIn
            }
        case FETCH_NOTES:
            // console.log('fetching reducer', state);
            return {
                ...state,
                notes: action.payload
            }
        default:
            return state
    }
}
import { 
        USER_AUTH_POST
        } from '../actions/types'

const initialState = {
    user: [],
}

export default (state = initialState, action) => {

    switch (action.type) {
        case USER_AUTH_POST:
            return {
                ...state,
                // all: action.someExtraData
                user: action.userData
            }

        default:
            return state
    }
}
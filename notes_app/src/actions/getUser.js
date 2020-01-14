import axios from 'axios'
import { USER_AUTH_POST } from './types'

export const getUser = (userData) => dispatch => {
    console.log('getting user', userData)
    dispatch({
        type: USER_AUTH_POST
    })
}

// export const DOMAIN_THING_REQUEST_STARTED = 'DOMAIN_THING_REQUEST_STARTED'
// export const DOMAIN_THING_REQUEST_SUCCESS = 'DOMAIN_THING_REQUEST_SUCCESS'
// export const getThings = () => {
//     return async (dispatch) => {
//         // dispatch({ type: DOMAIN_THING_REQUEST_STARTED })
//         // const response = await request(`/api/things`)
//         // const json = await response.json()
//         dispatch({
//             type: DOMAIN_THING_REQUEST_SUCCESS,
//             someExtraData: json,
//         })
//     }
// }
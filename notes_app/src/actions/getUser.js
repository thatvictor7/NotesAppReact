import axios from 'axios'
import { USER_AUTH_POST } from './types'

export const getUser = (userData) => dispatch => {
    console.log('getting user', userData)
    axios({
        method: 'POST',
        url: 'http://localhost:8080/login',
        data: {
            email: userData.email,
            password: userData.password
        }
    })
        .then((response) => {
            if (response.status === 200) {
                // console.log(response)
                return dispatch({
                    type: USER_AUTH_POST,
                    payload: response,
                    loggedIn: true
                })
            }
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
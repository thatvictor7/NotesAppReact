import axios from 'axios'
import { FETCH_NOTES } from './types'

export const fetchNotes = (userData) => dispatch => {
    console.log('fetching notes', userData) 
    axios({
        method: 'GET',
        url: 'http://localhost:8080/notes/user/' + userData,
    })
    // .then(res => res.json())
    .then((response) => {
        console.log('fetched notes', response);
        dispatch({
            type: FETCH_NOTES,
            payload: response
        })
    })   
}
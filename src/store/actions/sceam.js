import * as actionType from '../actions/actionTypy'
import axios from 'axios'

const screamStart = () => {
    return {
        type: actionType.SCREAM_START
    }
}


const screamSucess = (payload) => {
    return {
        type: actionType.SCREAM_SUCESS,
        payload: payload
    }
}


const screamFail = (error) => {
    return {
        type: actionType.SCREAM_FAIL,
        error: error
    }
}


export const fetchSCream = () => {
    return dispatch => {
        dispatch(screamStart)
        axios.get('/screems')
        .then(res => {
            dispatch(screamSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(screamFail)
        })
        
    }
}
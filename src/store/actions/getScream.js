import * as actionType from '../actions/actionTypy'
import axios from 'axios'

const onescreamStart = () => {
    return {
        type: actionType.ONESCREAM_START
    }
}


const onescreamSucess = (payload) => {
    return {
        type: actionType.ONESCREAM_SUCESS,
        payload: payload
    }
}


const onescreamFail = (error) => {
    return {
        type: actionType.ONESCREAM_FAIL,
        error: error
    }
}


export const fetchoneSCream = (screemId) => {
    return dispatch => {
        dispatch(onescreamStart)
        axios.get(`/screem/${screemId}`)
        .then(res => {
            dispatch(onescreamSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(onescreamFail)
        })
        
    }
}
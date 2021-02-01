import axios from 'axios'
import * as actionTypes from './actionTypy'


const userSucess = (screams) => {
    return {
        type: actionTypes.USER_SUCESS,
        screams: screams
    }
}


export const getUser = (userHandle) => {
    return dispatch => {
        axios.get(`/user/${userHandle}`)
        .then((res) => {
            dispatch(userSucess(res.data))
        })
        .then(err => {
            console.log(err)
        })
    }
}
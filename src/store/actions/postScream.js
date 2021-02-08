import axios from 'axios'
import * as actionType from './actionTypy'
import {instance} from './token'

const postStart = () => {
    return{
        type: actionType.POST_START
    }
}


const postSucess = (post) => {
    return{
        type: actionType.POST_SUCESS,
        post
    }
}


const postFaill = (error) => {
    return{
        type: actionType.POST_FAIL,
        error: error
    }
}


export const postSceam = (scream, token) => {
    return dispatch => {
        dispatch(postStart())
        const token = localStorage.getItem("IdToken")
        axios.post('/screem', scream,  {headers: {"Authorization" :  token}})
        .then(res => {
            dispatch(postSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(postFaill(err))
        })


    }
}
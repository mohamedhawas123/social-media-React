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
        post: post
    }
}


const postFaill = (error) => {
    return{
        type: actionType.POST_FAIL,
        error: error
    }
}


export const postSceam = (scream) => {
    return dispatch => {
        dispatch(postStart())
        instance.post('/screem', scream)
        .then(res => {
            dispatch(postSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(postFaill(err))
        })


    }
}
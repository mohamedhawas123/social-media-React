import axios from 'axios'
import * as actionTypes from './actionTypy'


const commentSucess = (comment) => {
    return {
        type: actionTypes.COMMENT_SUCESS,
        comment: comment
    }
}


export const submitComment = (screamId, commentData ,token ) => {
    return dispatch => {
        axios.post(`/scream/${screamId}/comment`, commentData ,{headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            dispatch(commentSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            
        })
        

        
    }
}
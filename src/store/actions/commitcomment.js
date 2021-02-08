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
        const token = localStorage.getItem("IdToken")
        axios.post(`/scream/${screamId}/comment`, commentData ,{headers: {"Authorization" :  token}})
        .then(res => {
            dispatch(commentSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            
        })
        

        
    }
}
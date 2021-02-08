import axios from 'axios'
import React from 'react'
import * as actionTypes from './actionTypy'
import { instance } from './token'


const likeStart = () => {
    return {
        type: actionTypes.LIKE_START
    }
}


const likeSucess = (payload) => {
    return {
        type: actionTypes.LIKE_SUCESS,
        payload
    }
}

const unlikeSucess = (payload) => {
    return {
        type: actionTypes.UNLIKE_SUCESS,
        payload
    }
}


const likeFail = (err) => {
    return {
        type: actionTypes.LIKE_FAIL,
        error: err
    }
}

export const likeScream = (screamId) => {
    return dispatch => {
        const token = localStorage.getItem("IdToken")
        dispatch(likeStart())
        axios.get(`/scream/${screamId}/like`, {headers: {"Authorization" :  token}})
        
        .then(res => {
         
           
            dispatch(likeSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(likeFail(err))
        })
    }
}

export const unLikeScream = (screamId, token) => {
    return dispatch => {
        dispatch(likeStart())
        const token = localStorage.getItem("IdToken")
        axios.get(`/scream/${screamId}/unlike`,  {headers: {"Authorization" :  token}})
        
        .then(res => {
            
            dispatch(unlikeSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(likeFail(err))
        })
    }
}


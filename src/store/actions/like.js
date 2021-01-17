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

export const likeScream = (screamId, getState) => {
    return dispatch => {
        const token = getState
        dispatch(likeStart())
        instance.get(`/scream/${screamId}/like`, { headers: {"Authorization" : `Bearer ${token}`} })
        
        .then(res => {
            console.log(res)
           
            dispatch(likeSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(likeFail(err))
        })
    }
}

export const unLikeScream = (screamId) => {
    return dispatch => {
        dispatch(likeStart())
        instance.get(`/scream/${screamId}/unlike`)
        
        .then(res => {
            
            dispatch(unlikeSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(likeFail(err))
        })
    }
}


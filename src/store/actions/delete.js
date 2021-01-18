import React from 'react'
import * as actionType from './actionTypy'
import { instance } from './token'



const deleteStart = () => {
    return {
        type: actionType.DELETE_START
    }
}


const deleteSucess = (payload) => {
    return {
        type: actionType.DATA_SUCESS,
        payload:payload

    }
}


const deleteFail = () => {
    return {
        type: actionType.DELETE_FAIL
    }
}


export const deleteSCream = (screamId) => {
    return dispatch => {
        dispatch(deleteStart())
        instance.delete(`/scream/${screamId}`)
        .then(res => {
            dispatch(deleteSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(deleteFail())
        })
        
    }
}


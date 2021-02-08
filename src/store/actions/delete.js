import axios from 'axios'
import React from 'react'
import * as actionType from './actionTypy'
import { instance } from './token'





const deleteSucess = (payload) => {
    return {
        type: actionType.DELETE_SUCESS,
        payload:payload

    }
}





export const deleteSCream = (screamId, token) => {
    return dispatch => {
        
        axios.delete(`/scream/${screamId}`, {headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
            console.log(res.data)
            dispatch(deleteSucess(res.data))
            console.log(token)
        })
        
        .catch(err => {
            console.log(err)
            
        })
        
    }
}


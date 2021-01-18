import React from 'react'
import * as actionType from './actionTypy'
import { instance } from './token'





const deleteSucess = (payload) => {
    return {
        type: actionType.DATA_SUCESS,
        payload:payload

    }
}





export const deleteSCream = (screamId) => {
    return dispatch => {
        
        instance.delete(`/scream/${screamId}`)
        .then(res => {
            dispatch(deleteSucess(res.data))
        })
        .catch(err => {
            console.log(err)
            
        })
        
    }
}


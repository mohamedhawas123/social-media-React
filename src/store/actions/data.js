import React from 'react'
import * as actionTypes from './actionTypy'
import { instance } from './token'

const dataStart = () => {
    return {
        type: actionTypes.DATA_START
    }
}

const dataSucess = data => {
    return {
        type: actionTypes.DATA_SUCESS,
        data: data
    }
}

const dataFail = error => {
    return {
        type: actionTypes.DATA_FAIL,
        error: error

    }
}


export const fetchData = () => {
    return dispatch => {
        const token = localStorage.getItem("IdToken")
        dispatch(dataStart())
        instance.get("/user")
        .then(res => {
            console.log(res.data)
            dispatch(dataSucess(res.data))
            
        })
        .catch(err => {
            console.log(err)
            dispatch(dataFail(err))
        })

    }
}
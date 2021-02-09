import axios from 'axios'
import React from 'react'
import * as actionTypes from './actionTypy'
import { instance } from './token'

export const dataStart = () => {
    return {
        type: actionTypes.DATA_START
    }
}

export const dataSucess = data => {
    return {
        type: actionTypes.DATA_SUCESS,
        data
    }
}

export const dataFail = error => {
    return {
        type: actionTypes.DATA_FAIL,
        error: error

    }
}


export const fetchData = () => {
    return dispatch => {
        const token = localStorage.getItem("IdToken")
        
        dispatch(dataStart())
        axios.get("/user", {headers: {"Authorization": token}})
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

export const uploadPic = (formData) => {
    return dispatch => {
        dispatch(dataStart())
        const token = localStorage.getItem("IdToken")
        axios.post('/user/image', formData, {headers: {"Authorization" :  token}})
        .then(res => {
            dispatch(fetchData(token))
        })
        .catch(err => {
            dispatch(dataFail(err))
        })
    }
}

export const editDetail = (userDetail) => {
    return dispatch => {
        dispatch(dataStart())
        const token = localStorage.getItem("IdToken")
        axios.post('/user',userDetail, {headers: {"Authorization" :  token}} )
        .then(() => {
            dispatch(fetchData())
        })
        .catch(err => {
            dispatch(dataFail(err))
        })
    }
}


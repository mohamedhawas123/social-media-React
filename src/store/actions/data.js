import axios from 'axios'
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
        data
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

export const uploadPic = (formData) => {
    return dispatch => {
        dispatch(dataStart())
        instance.post('/user/image', formData)
        .then(res => {
            dispatch(fetchData())
        })
        .catch(err => {
            dispatch(dataFail(err))
        })
    }
}

export const editDetail = (userDetail) => {
    return dispatch => {
        dispatch(dataStart())
        instance.post('/user',userDetail )
        .then(() => {
            dispatch(fetchData())
        })
        .catch(err => {
            dispatch(dataFail(err))
        })
    }
}


export const likescream = () => {
    return dispatch => {
        instance.post(`/scream/${screamId}/like`)
        .then(res => {
            dispatch()
        })
        .catch(err => {
            console.log(err)
            dispatch(dataFail(err))
        })
    }
}
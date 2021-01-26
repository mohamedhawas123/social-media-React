import React from 'react'
import * as actionType from './actionTypy'
import axios from 'axios'
import { instance } from './token'
import {dataStart, dataFail } from './data'




export const Auth_start = () => {
    return {
        type: actionType.AUTH_START
    }
}

export const Auth_Sucess = (token) => {
    return {
        type: actionType.AUTH_SUCCESS,
        token: token
    }
}

const dataSucess = data => {
    return {
        type: actionType.DATA_SUCESS,
        data: data
    }
}

export const Auth_Fail = (error) => {
    return {
        type: actionType.AUTH_FAIL,
        error: error
    }
}

export const logout= () => {
    localStorage.removeItem('IdToken')
    return {
        type: actionType.AUTH_LOGOUT
    }
}


export const fetchData = () => {
    return dispatch => {
        const token = localStorage.getItem("IdToken")
        dispatch(dataStart())
        axios.get("/user", {headers: {
            Authorization: token
        }})
        
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


export const authLogin = (email, password) => {
    return dispatch => {
        const userData = {
            email: email,
            password: password
        }
       
        dispatch(Auth_start)
        axios.post('/login', userData )
        .then(res => {
            const IdToken = res.data.token
            console.log(res.data.token)
            localStorage.setItem('IdToken', `Bearer ${res.data.token}`);
            axios.defaults.headers.common['Authorization'] = IdToken;
            dispatch(Auth_Sucess(IdToken))
            dispatch(fetchData())
            
        })
       
        .catch(err => {
            dispatch(Auth_Fail(err))

        })

      
        

    }
}







export const SignUP = (email, password, confirmPassword, handle) => {
    return dispatch => {
        const userData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            handle: handle
        }
        console.log(userData)
        dispatch(Auth_start)
        axios.post('/signup', userData )
        .then(res => {
            const IdToken = res.data.token
            console.log(res.data)
            localStorage.setItem('IdToken', `Bearer ${res.data.token}`);
            axios.defaults.headers.common['Authorization'] = IdToken;
            dispatch(Auth_Sucess(IdToken))
            this.props.history.push('/')
        })
       
        .catch(err => {
            dispatch(Auth_Fail(err))

        })

      
        

    }
}
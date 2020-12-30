import React from 'react'
import * as actionType from './actionTypy'
import axios from 'axios'


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

export const Auth_Fail = (token) => {
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



export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(Auth_start)
        axios.post('/login', userData )
        .then(res => {
            const IdToken = res.data.token
            console.log(res.data)
            localStorage.setItem('IdToken', `Bearer ${res.data.token}`);
            dispatch(Auth_Sucess(token))
            this.props.history.push('/')
        })
        .catch(err => {
            dispatch(Auth_Fail(err))

        })
        

    }
}
import React from 'react'
import {updateObj} from './urilits'
import * as actionTypes from '../actions/actionTypy'


const initualState= {
    token: null,
    error: null, 
    loading: false
}

const authStart = (state, action) => {
    return updateObj(state, {
        loading: true,
        error: null
    } )
}

const authSucess = (state, action) => {
    return updateObj(state, {
        token: action.token
    })
}


const authFail = (state, action) => {
    return updateObj(state, {
        token: action.error
    })
}

const reducer = (state=initualState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSucess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        default:
            return state
    }
}

export default reducer
import React from 'react'
import {updateObj} from './urilits'
import * as actionTypes from '../actions/actionTypy'


const initualState= {
    token: null,
    authenticated: true,
    error: null, 
    loading: false,
    data: {}
}

const authStart = (state, action) => {
    return updateObj(state, {
        loading: true,
        error: null,
        authenticated: true
    } )
}

const authSucess = (state, action) => {
    return updateObj(state, {
        token: action.token,
        authenticated: true,
        data: action.data
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
        case actionTypes.LIKE_SUCESS: return {
            ...state, 
            likes: [
                ...state.data.likes, {
                    userHandle: state.credentials.handle,
                    screamId: action.payload.screamId
                }

            ]
        }
        case actionTypes.UNLIKE_SUCESS: return{
            ...state, 
                likes:  state.data.likes.filter(like => like.screamId === action.payload.screamId)
            
        }
        default:
            return state
    }
}

export default reducer
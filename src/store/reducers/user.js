import React from 'react'
import {updateObj} from './urilits'
import * as actionTypes from '../actions/actionTypy'
import { unLikeScream } from '../actions/like'


const initualState= {
    token: null,
    authenticated: true,
    error: null, 
    loading: false,
    data: [],
    likes: []
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
        data: action.data,
    })
}

const dataSucess = (state, action) => {
    return updateObj(state, {
        data: action.data,
        error: null,
        loading: false
    })
}

const like = (state, action) => {
    return {
        likes: [
            ...state.data.likes,
            {
                screamId: action.payload.screamId
            }
        ]
    }
        
    
}

const unlike = (state, action) => {
    console.log(action)
    return updateObj(state, {
        likes: state.data.likes.filter(like => like.screamId !== action.payload.screamId)
    })
}


const authFail = (state, action) => {
    return updateObj(state, {
        token: action.error
    })
}

const reducer = (state=initualState, action) => {
    console.log(state)
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSucess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.DATA_SUCESS: return dataSucess(state, action)
        case actionTypes.LIKE_SUCESS: return like(state, action)
        case actionTypes.UNLIKE_SUCESS: return unlike(state, action)
        default:
            return state
    }
}

export default reducer
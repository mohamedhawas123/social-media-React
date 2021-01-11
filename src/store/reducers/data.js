import React from 'react'
import {updateObj} from './urilits'
import * as actionType from '../actions/actionTypy'


const initalstate = {
    data : {},
    error: null,
    loading: false
}


const  dataStart = (state, action) => {
    return updateObj(state, {
        error: null,
        loading: true
    })
}

const dataSucess = (state, action) => {
    return updateObj(state, {
        data: action.data,
        error: null,
        loading: false
    })
}



const dataFail = (state, action) => {
    return updateObj(state, {
        loading: false,
        error: action.error
    })
}


const reducer = (state =initalstate, action ) => {
    switch(action.type) {
        case actionType.DATA_START: return dataStart(state, action)
        case actionType.DATA_SUCESS: return dataSucess(state, action)
        case actionType.DATA_FAIL: return dataFail(state, action)
        case actionType.UNLIKE_SUCESS:
        case actionType.LIKE_SUCESS:
            let index = state.data.findIndex( (scream) => scream.screamId === action.payload.sceamId)
            state.data[index] = action.payload
            return {
                ...state
            }
        default:
            return state

    }
}

export default reducer 
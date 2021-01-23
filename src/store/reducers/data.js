import React from 'react'
import {updateObj} from './urilits'
import * as actionType from '../actions/actionTypy'


const initalstate = {
    data : [],
    error: null,
    loading: false,
    screams: [],
    scream: {}

}


const  dataStart = (state, action) => {
    console.log(state)
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

const  screamStart = (state, action) => {
    return updateObj(state, {
        error: null,
        loading: true
    })
}

const screamSucess = (state, action) => {
    return updateObj(state, {
        screams: action.payload,
        error: null,
        loading: false
    })
}



const screamFail = (state, action) => {
    return updateObj(state, {
        loading: false,
        error: action.error
    })
}


const  onescreamStart = (state, action) => {
    return updateObj(state, {
        error: null,
        loading: true
    })
}

const onescreamSucess = (state, action) => {
    return updateObj(state, {
        scream: action.payload,
        error: null,
        loading: false
    })
}



const onescreamFail = (state, action) => {
    return updateObj(state, {
        loading: false,
        error: action.error
    })
}


const deleteScream = (state, action) => {
    const index = state.screams.findIndex(scream => scream.screamId === action.payload)
    state.screams.splice(index, 1);
    return {
        ...state
    }
}

const postScream = (state, action) => {
    return updateObj(state, {
        screams: [action.post, ...state.screams]
    })

}


const reducer = (state =initalstate, action ) => {
    switch(action.type) {
        case actionType.DATA_START: return dataStart(state, action)
        case actionType.DATA_SUCESS: return dataSucess(state, action)
        case actionType.DATA_FAIL: return dataFail(state, action)
        case actionType.SCREAM_START: return screamStart(state, action)
        case actionType.SCREAM_SUCESS: return screamSucess(state, action)
        case actionType.SCREAM_FAIL: return screamFail(state, action)
        case actionType.ONESCREAM_START: return onescreamStart(state, action)
        case actionType.ONESCREAM_SUCESS: return onescreamSucess(state, action)
        case actionType.ONESCREAM_FAIL: return onescreamFail(state, action)
        case actionType.DELETE_SUCESS: return deleteScream(state, action)
        case actionType.POST_SUCESS: return postScream(state, action)
        case actionType.UNLIKE_SUCESS:
        case actionType.LIKE_SUCESS:
            //net to get the screamid from scream which is not in redux yet
            let index = state.screams.findIndex( (scream) => scream.screamId === action.payload.screamId)
            state.screams[index] = action.payload
            return {
                ...state
            }
        default:
            return state

    }
}

export default reducer 
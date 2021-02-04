import axios from 'axios'
import * as actionTypes from './actionTypy'


const notiSucess = (notifications) => {
    return {
        type: actionTypes.NOTIFICATION_SUCESS,
        notifications:notifications
    }
}

export const markNotificationRead = (notifications, token) => {
    return dispatch => {
        axios.post('/notifications', notifications, {headers: {"Authorization" : `Bearer ${token}`}})
        .then(res =>{
            dispatch(notiSucess(res.data))
        })
        .catch(err => {
            console.log(err)
        })

    }
}
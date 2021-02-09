import axios from 'axios'
import * as actionTypes from './actionTypy'


const notiSucess = (notifications) => {
    return {
        type: actionTypes.NOTIFICATION_SUCESS,
        notifications:notifications
    }
}

export const markNotificationRead = (notifications) => {
    return dispatch => {
        const token = localStorage.getItem("IdToken")
        axios.post('/notifications', notifications, {headers: {"Authorization" :  token}})
        .then(res =>{
            dispatch(notiSucess(res.data))
        })
        .catch(err => {
            console.log(err)
        })

    }
}
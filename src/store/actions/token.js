import axios from 'axios'

const token = localStorage.getItem("IdToken")

export const instance = axios.create({
    
    headers: {'Authorization': token}
  });
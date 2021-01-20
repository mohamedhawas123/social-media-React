import axios from 'axios'

const token = localStorage.getItem("IdToken")

export const instance = axios.create({
    baseURL: "http://localhost:5000/socialapp-78005/us-central1/api",
    headers: {'Authorization': token}
  });
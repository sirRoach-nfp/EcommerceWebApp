import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTczNmUwZDI1ZTc3ODhkYzZiNDhmYSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjE2NDIxNzEsImV4cCI6MTcyMTkwMTM3MX0.q_CEXFDDxzP2RAu-CW5jE4s60X0wfnPqzeF0ZBaysyQ";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})
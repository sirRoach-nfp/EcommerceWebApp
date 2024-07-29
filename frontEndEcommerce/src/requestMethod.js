import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
let TOKEN = "";
try {
    const rootData = JSON.parse(localStorage.getItem("persist:root"));
    if (rootData && rootData.user) {
        const userState = JSON.parse(rootData.user);
        if (userState.currentUser) {
            TOKEN = userState.currentUser.accessToken;
        }
    }
} catch (error) {
    console.error("Error parsing localStorage data:", error);
}

console.log("acces TOKEN : " + TOKEN)
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
})
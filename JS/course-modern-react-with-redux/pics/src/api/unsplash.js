import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { 
        Authorization: "Client-ID w09UB7zmuIZRjds9JKhwMR54WlQ2sueFWzOpWWQ_me0"
    }
})
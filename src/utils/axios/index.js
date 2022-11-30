import axios from "axios";

// const instance=axios.create({
//     baseURL:process.env.REACT_BASE_API_URL,
//     });

const instance = axios.create({
  baseURL: "https://devapi.geminisolutions.com",
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;

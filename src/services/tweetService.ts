import axios from "axios";
export const tweetsService = axios.create({
  baseURL: "http://localhost:5000/api/users/",
  headers: {
    "content-type": "application/json",
  },
});

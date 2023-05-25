import axios from "axios";
export const authService = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  headers: {
    "content-type": "application/json",
  },
});

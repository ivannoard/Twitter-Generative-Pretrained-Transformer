import axios from "axios";

export const userProfileService = axios.create({
  baseURL: "http://localhost:5000/api/users/profile",
  headers: {
    "content-type": "application/json",
  },
});

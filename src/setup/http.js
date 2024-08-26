
import axios from "axios";
axios.defaults.headers.common["x-auth-token"] = 'ad036a7f-c213-4f46-b4fe-4ce7870c07a8';

export const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});
 
export const httpUsers = axios.create({
  baseURL: process.env.VUE_APP_API_USERS_URL
});

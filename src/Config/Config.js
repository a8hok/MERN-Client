import axios from "axios";
export const BASE_URL = "http://localhost:8001"
export const axio = axios.create({
  baseURL: BASE_URL,
  // https://academy-server-gray.vercel.app https://academy-server-side.vercel.app
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});

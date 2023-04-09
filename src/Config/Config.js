import axios from "axios";
export const axio = axios.create({
  baseURL: "https://academy-server-side.vercel.app",
  // https://academy-server-gray.vercel.app
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});

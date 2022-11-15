import axios from "axios";
export const axio = axios.create({
  baseURL: "https://learning-mern-academy.herokuapp.com",
  //http://localhost:8001
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});

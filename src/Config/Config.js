import axios from "axios";
export const axio = axios.create({
  baseURL: "https://learning-mern-academy.herokuapp.com",
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});

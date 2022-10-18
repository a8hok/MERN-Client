import axios from "axios";
export const axio = axios.create({
  baseURL: "https://average-gray-flannel-shirt.cyclic.app",
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});

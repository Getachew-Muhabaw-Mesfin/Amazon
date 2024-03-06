import axios from "axios";

const axiosInstance = axios.create({
  //local server
  baseURL: "http://localhost:5000/",

  //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-pm1z.onrender.com",
});

export { axiosInstance };

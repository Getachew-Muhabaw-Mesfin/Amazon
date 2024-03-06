import axios from "axios";

const axiosInstance = axios.create({
  //local server
  //baseURL: "http://localhost:5000/",
  //deployed version of amazon server on cyclic.com
   baseURL: "https://easy-sneakers-calf.cyclic.app/",
});

export { axiosInstance };

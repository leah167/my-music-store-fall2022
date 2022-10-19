import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3010",
  withCredentials: true,
});

export default Axios;

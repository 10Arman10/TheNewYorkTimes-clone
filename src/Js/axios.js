import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.nytimes.com",
});

export default instance;

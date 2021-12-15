import axios from "axios";
const instance = axios.create({ baseURL: "http://192.168.99.100:5001/Song", });
export default instance;
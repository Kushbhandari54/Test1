import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/axios";

const test1 = async () => {
  try {
    const response = axios.get(API_URLS.test);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default test1;

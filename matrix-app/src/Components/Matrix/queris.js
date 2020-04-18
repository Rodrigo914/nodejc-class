import axios from "axios";
import { endpoints } from "../../endpoints";
export default {
  getDeterminante(matrix) {
    return axios.post(endpoints.matrix, { matrix }).then((res) => res.data);
  },
};

import axios from "axios";
import { envValidation } from "./envValidation.js";

export default axios.create({
  baseURL: `${envValidation.NODE_URL_API_COMICS}`,
  params: {
    api_key: envValidation.NODE_API_KEY,
    format: "json",
  },
});

import axios from "axios";
import { BASE_URL_DETAILS, BASE_URL_IMAGES } from "@/constants";

export const axiosInstanceImages = axios.create({
  baseURL: BASE_URL_IMAGES,
});

export const axiosInstanceDetails = axios.create({
  baseURL: BASE_URL_DETAILS,
});

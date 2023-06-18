import axios, { AxiosResponse } from "axios";
import { BASE_URL_IMAGES, BASE_URL_DETAILS } from "../constants";
import { Image } from "@/models";

export const getImages = async (): Promise<Image[]> => {
  const { data }: AxiosResponse<Image[]> = await axios.get(BASE_URL_IMAGES);
  return data;
};
export const getImageDetail = async (id: string): Promise<Image> => {
  const { data }: AxiosResponse<Image> = await axios.get(
    `${BASE_URL_DETAILS}/${id}/info`
  );
  return data;
};

export const getFavoritesImages = async (id: string): Promise<Image[]> => {
  const { data }: AxiosResponse<Image[]> = await axios.get(BASE_URL_IMAGES);
  const filteredData: Image[] = data.filter((image: Image) => image.id === id);
  return filteredData;
};

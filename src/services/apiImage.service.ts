import { AxiosResponse } from "axios";
import { Image } from "@/models";
import { axiosInstanceDetails, axiosInstanceImages } from ".";

/**
 * Obtiene el listado de las imágenes
 * @returns Una promesa que se resuelve en un array de objetos de tipo Image
 */
export const getImages = async (): Promise<Image[]> => {
  const { data }: AxiosResponse<Image[]> = await axiosInstanceImages.get("");
  return data;
};

/**
 * Obtiene el detalle de una imágen según un ID
 * @param id - El ID utilizado para filtrar la imágen.
 * @returns Una promesa que se resuelve en un objeto de tipo Image que coincide con el ID proporcionado.
 */
export const getImageDetail = async (id: string): Promise<Image> => {
  const { data }: AxiosResponse<Image> = await axiosInstanceDetails.get(`/${id}/info`);
  return data;
};

/**
 * Obtiene las imágenes favoritas según un ID.
 * @param id - El ID utilizado para filtrar las imágenes favoritas.
 * @returns Una promesa que se resuelve en un array de objetos de tipo Image que coinciden con el ID proporcionado.
 */
export const getFavoritesImages = async (id: string): Promise<Image[]> => {
  const { data }: AxiosResponse<Image[]> = await axiosInstanceImages.get("");
  const filteredData: Image[] = data.filter((image: Image) => image.id === id);
  return filteredData;
};

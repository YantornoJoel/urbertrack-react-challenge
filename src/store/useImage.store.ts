import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { Image, ImageStoreState } from "@/models";
import { getFavoritesImages, getImageDetail, getImages } from "@/services";
import { verifyFavorite } from "@/utils";

const INITIAL_STATE = {
  id: "",
  author: "",
  width: 0,
  height: 0,
  url: "",
  download_url: "",
};

export const useImageStore = create<ImageStoreState>()(
  devtools(
    persist(
      (set) => ({
        images: [],
        detailImage: INITIAL_STATE,
        favoriteImages: [],
        loading: true,

        getImages: async (value: number) => {
          set({ loading: true });
          try {
            const images: Image[] = await getImages();
            set({ images: images.slice(0, value), loading: false });
          } catch (error) {
            set({ loading: true });
            throw new Error(String(error));
          }
        },

        cleanImages: () => {
          set({ images: [] });
        },

        getImageDetail: async (id) => {
          set({ loading: true });
          try {
            const image: Image = await getImageDetail(id);
            set({ detailImage: image, loading: false });
          } catch (error) {
            set({ loading: true });
            throw new Error(String(error));
          }
        },

        cleanImageDetail: () => {
          set({ detailImage: INITIAL_STATE });
        },

        addFavoriteImage: async (id: string) => {
          try {
            const images: Image[] = await getFavoritesImages(id);
            set((state: ImageStoreState) =>
              verifyFavorite({ state, id, images })
            );
          } catch (error) {
            throw new Error(String(error));
          }
        },

        cleanFavoriteImages: () => {
          set({ favoriteImages: [] });
        },
      }),
      {
        name: "images",
      }
    )
  )
);

export default useImageStore;

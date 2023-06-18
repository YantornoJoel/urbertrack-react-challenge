import { Image, ImageStoreState } from "@/models";

interface Props {
  state: ImageStoreState;
  id: string;
  images: Image[];
}

export const verifyFavorite = ({ state, id, images }: Props) => {
  const isFavorite = state.favoriteImages.some((img) => img.id === id);
  if (isFavorite) {
    return {
      ...state,
      favoriteImages: state.favoriteImages.filter((img) => img.id !== id),
    };
  } else {
    return {
      ...state,
      favoriteImages: [...state.favoriteImages, ...images],
    };
  }
};

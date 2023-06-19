import { Image, ImageStoreState } from "@/models";
import { SwalFavorite } from "@/utils";

interface Props {
  state: ImageStoreState;
  id: string;
  images: Image[];
}

export const verifyFavorite = ({ state, id, images }: Props) => {
  const isFavorite = state.favoriteImages.some((img) => img.id === id);

  if (isFavorite) {
    SwalFavorite({
      title: "Imagen removida de favoritos",
      icon: "info",
    });

    return {
      ...state,
      favoriteImages: state.favoriteImages.filter((img) => img.id !== id),
    };
  } else {
    SwalFavorite({
      title: "Imagen agregada a favoritos",
      icon: "success",
    });

    return {
      ...state,
      favoriteImages: [...state.favoriteImages, ...images],
    };
  }
};

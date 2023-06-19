import { Avatar } from "@mui/material";
import FavIcon from "@mui/icons-material/Bookmark";

import { useImageStore } from "@/store";
import { Image } from "@/models";

type Props = {
  image: Image;
};

export const AddFavoriteImage: React.FC<Props> = ({ image }) => {
  const addFavoriteImage = useImageStore((state) => state.addFavoriteImage);
  const favoriteImages = useImageStore((state) => state.favoriteImages);

  const addFavorite = (id: string): void => {
    addFavoriteImage(id);
  };

  return (
    <Avatar
      onClick={() => addFavorite(image.id)}
      style={{
        zIndex: 1,
        position: "absolute",
        top: "2px",
        right: "2px",
        backgroundColor: favoriteImages.some(
          (favoriteImg) => favoriteImg.id === image.id
        )
          ? "#1976d2"
          : "#161f27",
        transition: "background-color 0.3s ease",
      }}
      sx={{
        "&:hover": {
          color: favoriteImages.some(
            (favoriteImg) => favoriteImg.id === image.id
          )
            ? "#161f27"
            : "#1976d2",
          cursor: "pointer",
        },
      }}
    >
      <FavIcon />
    </Avatar>
  );
};

import { Grid } from "@mui/material";

import { ListImages, NoFavoriteImage } from "@/components";
import { useImageStore } from "@/store";

export const MyImage: React.FC = () => {
  const favoriteImages = useImageStore((state) => state.favoriteImages);

  return (
    <div style={{ marginTop: "100px", marginBottom: "30px" }}>
      {favoriteImages.length === 0 ? (
        <NoFavoriteImage />
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ margin: "auto", maxWidth: "1000px" }}
        >
          <ListImages images={favoriteImages} />
        </Grid>
      )}
    </div>
  );
};

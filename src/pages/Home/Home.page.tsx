import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { ListImages, LoadMoreImage } from "@/components";
import { INITIAL_IMAGES, LOAD_MORE_IMAGES } from "@/constants";
import { Image } from "@/models";
import { useImageStore } from "@/store";

export const Home: React.FC = () => {
  const [value, setValue] = useState(INITIAL_IMAGES);

  const images: Image[] = useImageStore((state) => state.images);
  const getImages = useImageStore((state) => state.getImages);

  const handleLoadMore = () => {
    value === INITIAL_IMAGES ? setValue(LOAD_MORE_IMAGES) : setValue(INITIAL_IMAGES);
  };

  useEffect(() => {
    getImages(value);
  }, [getImages, value]);

  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "40px" }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ margin: "auto", maxWidth: "1000px" }}
        >
          <LoadMoreImage value={value} handleClick={handleLoadMore} />
          <ListImages images={images} />
        </Grid>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

import {
  AddFavoriteImage,
  SkeletonImage,
  ProgressiveImage,
} from "@/components";
import { Image } from "@/models";
import { useImageStore } from "@/store";

type Props = {
  images: Image[];
};

export const ListImages: React.FC<Props> = ({ images }) => {
  const getImageDetail = useImageStore((state) => state.getImageDetail);
  const loading = useImageStore((state) => state.loading);

  const handleClick = (id: string) => {
    getImageDetail(id);
  };

  return (
    <Grid container spacing={3} justifyContent="center" marginTop={1}>
      {images.map((img) => (
        <Grid key={img.id} item xs={10} sm={6} md={4}>
          {loading ? (
            <SkeletonImage />
          ) : (
            <Box maxWidth={350} mx="auto">
              <Card>
                <div style={{ position: "relative" }}>
                  <AddFavoriteImage image={img} />
                  <Link
                    to={`/img/${img.id}`}
                    onClick={() => handleClick(img.id)}
                  >
                    <ProgressiveImage
                      src={img.download_url}
                      placeholder={img.author}
                      alt={img.author}
                    />
                  </Link>
                </div>
                <CardContent sx={{ marginTop: "-15px", maxHeight: "25px" }}>
                  <Typography variant="h6" component="h6" textAlign="center">
                    {img.author}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box, useTheme, useMediaQuery } from "@mui/material";

import { AddFavoriteImage, SkeletonImage } from "@/components";
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


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
                  <Link to={`/img/${img.id}`} onClick={() => handleClick(img.id)}>
                    <img
                      onClick={() => handleClick(img.id)}
                      src={img.download_url}
                      alt={img.author}
                      width={isMobile ? 350 : 320}
                      height={200}
                      style={{ marginBottom: "10px", objectFit: "contain", marginTop: '10px' }}
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

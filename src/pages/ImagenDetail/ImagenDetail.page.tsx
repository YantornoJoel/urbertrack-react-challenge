import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";

import { AddFavoriteImage, Loader } from "@/components";
import { Image } from "@/models";
import { useImageStore } from "@/store";

export const ImagenDetail: React.FC = () => {
  const navigate = useNavigate();
  const cleanImageDetail = useImageStore((state) => state.cleanImageDetail);
  const detailImage: Image = useImageStore((state) => state.detailImage);
  const loading = useImageStore((state) => state.loading);

  const handleClick = () => {
    navigate(-1);
    setTimeout(() => {
      cleanImageDetail();
    }, 1000);
  };

  return (
    <div className="imgdetail">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item xs={12} sx={{ marginRight: "30px" }}>
            <Grid container justifyContent="flex-start">
              <IconButton color="primary" onClick={handleClick} size="large">
                <ArrowBackIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Card className="animate__animated animate__backInLeft">
            <div style={{ position: "relative" }}>
              <AddFavoriteImage image={detailImage} />
            </div>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "10px" }}
                textAlign="center"
              >
                <i>Detalle de la imagen</i>
              </Typography>

              <img
                src={detailImage.download_url}
                alt={`Image ${detailImage.id}`}
                height={350}
                width={700}
                style={{ border: "1px solid #161f27" }}
              />
              <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={6} alignItems="flex-start">
                  <Typography variant="h6" color="text.secondary">
                    {detailImage.author}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {detailImage.height} &nbsp; {detailImage.width}
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign="end" sx={{ marginTop: "10px" }}>
                  {/* <Button variant="outlined" href={detailImage.download_url}>Descargar</Button> */}
                  <Link href={detailImage.download_url} target="_blank">
                    <IconButton color="primary" size="large">
                      <DownloadIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

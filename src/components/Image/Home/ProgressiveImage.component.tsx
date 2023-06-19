import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMediaQuery, useTheme } from "@mui/material";

export const ProgressiveImage = ({ src, placeholder, alt }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      placeholderSrc={placeholder}
      style={{
        width: isMobile ? "350px" : "320px",
        height: "200px",
        marginBottom: "10px",
      }}
    />
  );
};

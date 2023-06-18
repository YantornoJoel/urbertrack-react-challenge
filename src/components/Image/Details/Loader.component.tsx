import { CircularProgress } from "@mui/material";

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <CircularProgress size={100} sx={{ color: "rgb(25, 118, 210)" }} />
    </div>
  );
};

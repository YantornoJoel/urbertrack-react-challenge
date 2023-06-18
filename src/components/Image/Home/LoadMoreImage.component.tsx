import { Grid, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Cached";
import RestoreIcon from "@mui/icons-material/Restore";

type Props = {
  value: 11 | number;
  handleClick: () => void;
};

export const LoadMoreImage: React.FC<Props> = ({ value, handleClick }) => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="flex-end">
        <IconButton color="primary" onClick={handleClick} size="large">
          {value === 11 ? (
            <RefreshIcon fontSize="large" />
          ) : (
            <RestoreIcon fontSize="large" />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

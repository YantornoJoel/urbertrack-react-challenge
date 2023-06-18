import { Skeleton, styled } from "@mui/material";

const StyledSkeleton = styled(Skeleton)`
  background-color: #dadada;
`;

export const SkeletonImage: React.FC = () => {
  return (
    <div className="animate__animated animate__pulse">
      <StyledSkeleton variant="rectangular" width="95%" height={200} />
      <StyledSkeleton width="95%" height={80} />
    </div>
  );
};

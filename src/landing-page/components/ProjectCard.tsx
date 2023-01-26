import {
  AspectRatio,
  Box,
  Card,
  CardCover,
  CardOverflow,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
interface IProjectCardProps {
  id: string | number;
}

export const ProjectCard: FC<IProjectCardProps> = (props) => {
  const tempSrc =
    "https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80";
  return (
    <Card sx={{ aspectRatio: "1.5 / 1" }}>
      <CardCover>
        <Box component="img" src={tempSrc}></Box>
      </CardCover>
      <CardCover
        sx={{
          "&:hover, &:focus-within": {
            opacity: 1,
          },
          opacity: 0,
          transition: "0.3s",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      >
        <Box>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexGrow: 1,
              alignSelf: "flex-end",
            }}
          >
            <Chip sx={{ position: "absolute", top: 7, right: 7 }}>
              Graphic Design
            </Chip>
            <Typography level="h5" fontWeight="bold">
              <Link
                component={RouterLink}
                to={`/projects/${props.id}`}
                overlay
                underline="none"
                sx={{
                  color: "#fff",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                Landscape
              </Link>
            </Typography>
            <Typography textColor="neutral.300">By Marwan</Typography>
          </Box>
        </Box>
      </CardCover>
    </Card>
  );
};

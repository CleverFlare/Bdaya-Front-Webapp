import { Box, Card, CardCover, Chip, Link, Typography } from "@mui/joy";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import useDynamicTranslation from "../../hooks/useDynamicTranslation";
import { RootState } from "../../store";
interface IProjectCardProps {
  thumbnail?: string;
  title: string;
  author: string;
  track: string | number;
  link: string;
}

export const ProjectCard: FC<IProjectCardProps> = (props) => {
  const dt = useDynamicTranslation();
  const trackName = useSelector(
    (state: RootState) =>
      state.tracks.value.find((track) => track.id === props.track)?.name
  );
  const thumbnailPlaceholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";

  return (
    <Card sx={{ aspectRatio: "1.5 / 1" }} className="direction-agnostic">
      <CardCover>
        <Box component="img" src={props?.thumbnail || thumbnailPlaceholder} />
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
              {trackName || "Unknwon Track"}
            </Chip>
            <Typography level="h5" fontWeight="bold" textColor="white">
              {props.title}
            </Typography>
            <Typography textColor="neutral.300">By {props.author}</Typography>
            <Link href={props.link} overlay target="_blank"></Link>
          </Box>
        </Box>
      </CardCover>
    </Card>
  );
};

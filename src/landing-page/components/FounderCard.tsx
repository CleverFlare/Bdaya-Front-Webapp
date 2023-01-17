import { Box, Card, CardContent, CardCover, Typography } from "@mui/joy";

import { FC } from "react";
interface IFounderCardProps {
  src?: string;
  name: string;
  major: string;
}

export const FounderCard: FC<IFounderCardProps> = (props) => {
  const defaultPhoto =
    "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=gq94kIlhv7wf-8YRE4LYTN2U46OxB4DStMU9FrSgXY0=";

  return (
    <Card sx={{ height: "400px" }}>
      <CardCover>
        <Box component="img" src={props.src || defaultPhoto} loading="lazy" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {props.name}
        </Typography>
        <Typography textColor="neutral.300">{props.major}</Typography>
      </CardContent>
    </Card>
  );
};

import { AspectRatio, Box, Button, Card, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TechDetails, TechList } from "./TechList";

interface ITrackCardProps {
  src?: string;
  title: string;
  tech: TechDetails[];
  to: string;
}

export const TrackCard: FC<ITrackCardProps> = (props) => {
  const { t } = useTranslation();

  const defaultImage =
    "https://thumbs.dreamstime.com/b/zig-zag-tire-track-black-gray-background-eps-38949703.jpg";

  return (
    <Card variant="outlined">
      <AspectRatio sx={{ marginBottom: 2 }}>
        <Box
          component="img"
          src={props.src || defaultImage}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Stack spacing={2}>
        <Typography fontWeight="lg">{props.title}</Typography>
        <Stack direction="row" gap={0.5} flexWrap="wrap" sx={{ width: "100%" }}>
          <Typography>{t("components.track_card.learn")}</Typography>
          <TechList
            list={[
              ...props.tech,
              {
                name: "And More...",
              },
            ]}
          />
        </Stack>
        <Button component={Link} to={props.to}>
          {t("components.track_card.details_button")}
        </Button>
      </Stack>
    </Card>
  );
};

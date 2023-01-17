import { AspectRatio, Box, Card, Chip, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type ChipInfo = {
  name: string;
  src?: string;
};

interface ITrackCardProps {
  src?: string;
  title: string;
  tech: ChipInfo[];
}

export const TrackCard: FC<ITrackCardProps> = (props) => {
  const { t } = useTranslation();

  const defaultImage =
    "https://thumbs.dreamstime.com/b/zig-zag-tire-track-black-gray-background-eps-38949703.jpg";

  function redirectToInfo(href: string) {
    window.open(href, "_blank");
  }

  return (
    <Card variant="outlined" className="direction-agnostic">
      <AspectRatio sx={{ marginBottom: 2 }}>
        <Box
          component="img"
          src={props.src || defaultImage}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Stack spacing={1}>
        <Typography fontWeight="lg">{props.title}</Typography>
        <Stack direction="row" gap={0.5} flexWrap="wrap" sx={{ width: "100%" }}>
          <Typography>{t("landing-page.tracks-sec.card_learn")}</Typography>
          {props.tech.map(({ name, src }) => (
            <Chip
              key={crypto.randomUUID()}
              size="sm"
              onClick={src ? () => redirectToInfo(src) : undefined}
            >
              {name}
            </Chip>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

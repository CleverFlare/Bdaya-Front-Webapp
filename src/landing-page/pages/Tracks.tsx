import { Container, Grid, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TrackCard } from "../components/TrackCard";
interface ITracksProps {}

export const Tracks: FC<ITracksProps> = (props) => {
  const tracks = useSelector((state: RootState) => state.tracks.value);
  const { t } = useTranslation();
  return (
    <>
      <Container sx={{ paddingBlock: 2, paddingBottom: 10 }}>
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.tracks-page.title")}
        </Typography>
        <Grid container sx={{ marginTop: 2, marginInline: "auto" }} spacing={2}>
          {tracks.map((track) => (
            <Grid md={4} sm={6} xs={12} key={`Track ${track.id}`}>
              <TrackCard
                title={track.name}
                src={track.thumbnail}
                tech={track.tech}
                id={track.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

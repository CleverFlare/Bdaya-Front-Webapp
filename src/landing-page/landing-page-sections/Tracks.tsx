import { Box, Button, Container, Grid } from "@mui/joy";
import { Stack } from "@mui/system";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useDynamicTranslation from "../../hooks/useDynamicTranslation";
import { REGISTER, TRACKS } from "../../routesPaths";
import { RootState } from "../../store";
import { SectionTitle } from "../components/SectionTitle";
import { TrackCard } from "../components/TrackCard";
interface ITracksProps {}

export const Tracks: FC<ITracksProps> = (props) => {
  const tracks = useSelector((state: RootState) => state.tracks.value);
  const { t } = useTranslation();
  const dynamicTranslation = useDynamicTranslation();
  return (
    <Box sx={{ paddingBlock: 5 }}>
      <Container>
        <SectionTitle>{t("landing-page.tracks-sec.title")}</SectionTitle>
        <Grid container sx={{ marginTop: 5 }} spacing={2}>
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
        <Stack
          direction="row"
          justifyContent="center"
          gap={1}
          sx={{ marginTop: 3 }}
        >
          <Button component={Link} to={TRACKS}>
            {t("landing-page.tracks-sec.view_all")}
          </Button>
          <Button component={Link} to={REGISTER} variant="outlined">
            {t("landing-page.tracks-sec.enroll")}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

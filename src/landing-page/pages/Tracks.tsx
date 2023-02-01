import { Container, Grid, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Empty } from "../../illustrations/Empty";
import { RootState } from "../../store";
import { TrackCard } from "../components/TrackCard";
interface ITracksProps {}

export const Tracks: FC<ITracksProps> = (props) => {
  const tracks = useSelector((state: RootState) => state.tracks.value);
  const { t } = useTranslation();

  const isEmpty = !Boolean(tracks.length);
  return (
    <>
      <Container
        component={Stack}
        sx={{
          display: "flex",
          flex: 1,
          paddingBlock: 2,
          paddingBottom: 10,
        }}
      >
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.tracks-page.title")}
        </Typography>

        {isEmpty && (
          <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
            <Empty>currently there are no tracks</Empty>
          </Stack>
        )}
        {!isEmpty && (
          <Grid
            container
            sx={{ marginTop: 2, marginInline: "auto", width: "100%" }}
            spacing={2}
          >
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
        )}
      </Container>
    </>
  );
};

import {
  AspectRatio,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/joy";
import { Stack } from "@mui/system";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useDynamicTranslation from "../../hooks/useDynamicTranslation";
import { REGISTER, TRACKS } from "../../routesPaths";
import { SectionTitle } from "../components/SectionTitle";
import { TrackCard } from "../components/TrackCard";
interface ITracksProps {}

export const Tracks: FC<ITracksProps> = (props) => {
  const { t } = useTranslation();
  const dynamicTranslation = useDynamicTranslation();
  return (
    <Box sx={{ paddingBlock: 5 }}>
      <Container>
        <SectionTitle>{t("landing-page.tracks-sec.title")}</SectionTitle>
        <Grid container sx={{ marginTop: 5 }} spacing={2}>
          <Grid md={4} sm={6} xs={12}>
            <TrackCard
              title="Web Development"
              src="https://i.pinimg.com/736x/3d/00/a1/3d00a1f50379c03ef5215f6f29737195.jpg"
              tech={[
                {
                  name: "HTML",
                  src: "https://en.wikipedia.org/wiki/HTML",
                },
                {
                  name: "CSS",
                  src: "https://en.wikipedia.org/wiki/CSS",
                },
                {
                  name: "JavaScript",
                  src: "https://en.wikipedia.org/wiki/JavaScript",
                },
              ]}
              to="/tracks/web-development"
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <TrackCard
              title="Graphic Design"
              src="https://media.istockphoto.com/id/1214838856/vector/graphic-designer-hiring-concept.jpg?s=612x612&w=0&k=20&c=EDSs5X3voFVuudqYovTelH75sLMsznwjZ8Nyszhjnhs="
              tech={[
                {
                  name: "Photoshop",
                  src: "https://en.wikipedia.org/wiki/Adobe_Photoshop",
                },
                {
                  name: "Illustrator",
                  src: "https://en.wikipedia.org/wiki/Adobe_Illustrator",
                },
              ]}
              to="/tracks/graphic-design"
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <TrackCard
              title="Game Development"
              src="https://assets.website-files.com/5fc9d3d58a00611de699385c/5fdc6d6a421275781b062f02_6.png"
              tech={[
                {
                  name: "Unity",
                  src: "https://en.wikipedia.org/wiki/Unity_(game_engine)",
                },
                {
                  name: "C# Language",
                  src: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
                },
              ]}
              to="/tracks/game-development"
            />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
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

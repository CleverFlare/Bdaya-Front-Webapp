import { Container, Grid, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TrackCard } from "../components/TrackCard";
interface ITracksProps {}

export const Tracks: FC<ITracksProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Container sx={{ paddingBlock: 2, paddingBottom: 10 }}>
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.tracks-page.title")}
        </Typography>
        <Grid container sx={{ marginTop: 2, marginInline: "auto" }} spacing={2}>
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
                { name: "and more..." },
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
                { name: "and more..." },
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
                { name: "and more..." },
              ]}
              to="/tracks/game-development"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

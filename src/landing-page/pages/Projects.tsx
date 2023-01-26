import { Card, Chip, Container, Grid, Stack, Typography } from "@mui/joy";
import { FC, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { TracksCategories } from "../components/TracksCategories";
interface IProjectsProps {}

export const Projects: FC<IProjectsProps> = (props) => {
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
  }

  return (
    <>
      <Container
        component={Stack}
        spacing={2}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <Typography level="h2" fontWeight="bold">
          Projects
        </Typography>
        <TracksCategories
          list={["Front-End", "Back-End", "C#", "Graphic Design"]}
          onSelect={handleSelectCategory}
        />
        <Grid container spacing={2}>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="sdfasd" />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="sdfasd" />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="sdfasd" />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="sdfasd" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

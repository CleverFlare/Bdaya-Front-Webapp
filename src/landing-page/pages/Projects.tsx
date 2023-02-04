import { Card, Chip, Container, Grid, Stack, Typography } from "@mui/joy";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Empty } from "../../illustrations/Empty";
import { RootState } from "../../store";
import { ProjectCard } from "../components/ProjectCard";
import { TracksCategories } from "../components/TracksCategories";

export const Projects: FC = () => {
  const tracks = useSelector((state: RootState) => state.tracks.value);
  const projects = useSelector((state: RootState) => state.projects.value);
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
  }

  let filteredProjects = projects;

  // filters only if the category is a truthy value
  selectedCategory &&
    (filteredProjects = projects.filter(
      (project) => String(project.track) === String(selectedCategory)
    ));

  const isEmpty = !Boolean(projects.length);

  return (
    <>
      <Container
        component={Stack}
        spacing={2}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.projects-page.title")}
        </Typography>
        <TracksCategories
          list={tracks.map((track) => ({ name: track.name, id: track.id }))}
          onSelect={handleSelectCategory}
        />

        {isEmpty && (
          <Stack justifyContent="center" alignItems="center" sx={{ flex: 1 }}>
            <Empty>currently there are no projects</Empty>
          </Stack>
        )}
        {!isEmpty && (
          <Grid container spacing={2}>
            {filteredProjects.map((project, index) => (
              <Grid md={4} sm={6} xs={12} key={`Project ${index}`}>
                <ProjectCard
                  title={project.title}
                  author={project.author}
                  thumbnail={project.thumbnail}
                  track={project.track}
                  link={project.link}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

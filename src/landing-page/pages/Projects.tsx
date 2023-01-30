import { Card, Chip, Container, Grid, Stack, Typography } from "@mui/joy";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectPreviewModal } from "../components/ProjectPreviewModal";
import { TracksCategories } from "../components/TracksCategories";

export const Projects: FC = () => {
  const tracks = useSelector((state: RootState) => state.tracks.value);
  const projects = useSelector((state: RootState) => state.projects.value);
  const [trackDetails, setTrackDetails] = useState<any>(null);
  const [openPreview, setOpenPreview] = useState<boolean>(false);
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleOpenPreviewDetails(obj: any) {
    setTrackDetails(obj);
    setOpenPreview(true);
  }

  function handleClosePreviewDetails() {
    setTrackDetails(null);
    setOpenPreview(false);
  }

  let filteredProjects = projects;

  // filters only if the category is a truthy value
  selectedCategory &&
    (filteredProjects = projects.filter(
      (project) => String(project.track) === String(selectedCategory)
    ));

  return (
    <>
      <Container
        component={Stack}
        spacing={2}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <ProjectPreviewModal
          open={openPreview}
          onClose={() => handleClosePreviewDetails()}
          {...(trackDetails || {})}
        />
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.projects-page.title")}
        </Typography>
        <TracksCategories
          list={tracks.map((track) => ({ name: track.name, id: track.id }))}
          onSelect={handleSelectCategory}
        />
        <Grid container spacing={2}>
          {filteredProjects.map((project, index) => (
            <Grid md={4} sm={6} xs={12} key={`Project ${index}`}>
              <ProjectCard
                title={project.title}
                author={project.author}
                thumbnail={project.images[0]}
                track={project.track}
                onClick={() => handleOpenPreviewDetails(project)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

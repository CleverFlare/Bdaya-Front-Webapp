import { Card, Chip, Container, Grid, Stack, Typography } from "@mui/joy";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUpdate } from "../../hooks";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectPreviewModal } from "../components/ProjectPreviewModal";
import { TracksCategories } from "../components/TracksCategories";
interface IProjectsProps {}

const dummyDetails = {
  title: "Landscape",
  author: "Marwan",
  images: [
    "https://media.istockphoto.com/id/1270775179/photo/cairo-found-nile.jpg?b=1&s=612x612&w=0&k=20&c=yo4YxCngGOBbIikg6pGQhtLQl7OmzplVuJJXTBnNkKg=",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg",
  ],
};

export const Projects: FC<IProjectsProps> = (props) => {
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
          list={["Front-End", "Back-End", "C#", "Graphic Design"]}
          onSelect={handleSelectCategory}
        />
        <Grid container spacing={2}>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard
              onClick={() => handleOpenPreviewDetails(dummyDetails)}
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard
              onClick={() => handleOpenPreviewDetails(dummyDetails)}
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard
              onClick={() => handleOpenPreviewDetails(dummyDetails)}
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard
              onClick={() => handleOpenPreviewDetails(dummyDetails)}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

import { Card, Chip, Container, Grid, Stack, Typography } from "@mui/joy";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";
import { TracksCategories } from "../components/TracksCategories";
interface IProjectsProps {}

export const Projects: FC<IProjectsProps> = (props) => {
  const { t } = useTranslation();
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
          {t("landing-page.projects-page.title")}
        </Typography>
        <TracksCategories
          list={["Front-End", "Back-End", "C#", "Graphic Design"]}
          onSelect={handleSelectCategory}
        />
        <Grid container spacing={2}>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="Web Dev" />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="Graphic Design" />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="Game Dev" />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <ProjectCard id="C# Dev" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

import {
  Box,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
} from "@mui/joy";
import { SpecInfo } from "../components/SpecInfo";
import { FC, useEffect, useState } from "react";
import { ImageCover } from "../components/ImageCover";
import { useTranslation } from "react-i18next";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { TechList } from "../components/TechList";
import { BackButton } from "../../components/atoms/BackButton";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useDynamicTranslation from "../../hooks/useDynamicTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ProjectCard } from "../components/ProjectCard";
import { Empty } from "../../illustrations/Empty";

interface ITrackDetailsProps {}

export const TrackDetails: FC<ITrackDetailsProps> = (props) => {
  const projects = useSelector((state: RootState) => state.projects.value);

  const { id } = useParams();

  const { t } = useTranslation();

  const dynamicTranslation = useDynamicTranslation();

  const tracks = useSelector((state: RootState) => state.tracks.value);

  let track = tracks.find((track) => String(track.id) === id);

  const responsive = {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  };

  let filteredProjects = projects.filter(
    (project: any) => String(project.track) === String(id)
  );

  useEffect(() => {
    console.log(filteredProjects);
  }, [filteredProjects]);

  const isEmpty = !Boolean(filteredProjects.length);

  return (
    <>
      <Container
        component={Stack}
        spacing={2}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <Stack direction="row" gap={2}>
          <BackButton />
          <Typography level="h2" fontWeight="bold">
            {track?.name || ""}
          </Typography>
        </Stack>
        <ImageCover src={track?.cover || ""} />
        <Stack direction="row" gap={1}>
          <Typography>{t("landing-page.track_details-page.tech")}</Typography>
          <Divider orientation="vertical" />
          <TechList list={track?.tech || []} />
        </Stack>
        <SpecInfo title={t("landing-page.track_details-page.about")}>
          {dynamicTranslation(track?.detailsAr || "", track?.detailsEn || "")}
        </SpecInfo>
        <SpecInfo title={t("landing-page.track_details-page.prereq")}>
          <List>
            {dynamicTranslation(
              track?.prereqAr || [],
              track?.prereqEn || []
            ).map((content: string) => (
              <ListItemWidthDec key={`preqrequisite ${crypto.randomUUID()}`}>
                {content}
              </ListItemWidthDec>
            ))}
          </List>
        </SpecInfo>
        <SpecInfo title={t("landing-page.track_details-page.projects")}>
          <>
            {isEmpty && (
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ flex: 1 }}
              >
                <Empty>currently there are no projects</Empty>
              </Stack>
            )}
            {!isEmpty && (
              <Box
                component={Swiper}
                sx={{ marginTop: 2 }}
                modules={[Navigation]}
                spaceBetween={30}
                breakpoints={responsive}
                navigation
                className="direction-agnostic"
              >
                {filteredProjects.map((project, index) => {
                  console.log(index);
                  return (
                    <SwiperSlide key={`Project ${index}`}>
                      <ProjectCard
                        title={project.title}
                        author={project.author}
                        thumbnail={project.thumbnail}
                        track={project.track}
                        link={project.link}
                      />
                    </SwiperSlide>
                  );
                })}
              </Box>
            )}
          </>
        </SpecInfo>
      </Container>
    </>
  );
};

interface IListItemWidthDecProps {
  children: any;
}

export const ListItemWidthDec: FC<IListItemWidthDecProps> = (props) => {
  return (
    <ListItem>
      <ListItemDecorator>
        <NewReleasesIcon />
      </ListItemDecorator>{" "}
      {props.children}
    </ListItem>
  );
};

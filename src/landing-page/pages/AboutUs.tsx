import { Box, Container, Stack, Typography } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SpecInfo } from "../components/SpecInfo";
interface IAboutUsProps {}

export const AboutUs: FC<IAboutUsProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        component={Stack}
        spacing={2}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.about_us-page.title")}
        </Typography>
        <Box
          component="img"
          src="https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/264617042_4962842057083898_5230485186881333981_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHf8KCD4quvhH1Di25GIFCimX37dvR3hiiZfft29HeGKH2KSAqIOj2fD2wtof4246uk0MBdxAqYPjNVGOA4r4ss&_nc_ohc=6kcPruD7ZKYAX9vap0x&_nc_ht=scontent-hbe1-1.xx&oh=00_AfCh97ylDWB28Lqmhvhu9vx4LsQ8A5vcoc2UfMjBPb53bQ&oe=63CF70F1"
          sx={{ width: "100%", borderRadius: 10 }}
        />
        <SpecInfo title={t("landing-page.about_us-page.history")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut
          laborum et necessitatibus, porro officiis amet fugit modi facilis
          possimus. Autem, velit laudantium iusto quis iste asperiores modi quo
          reprehenderit? possimus. Autem, velit laudantium iusto quis iste
          asperiores modi quo reprehenderit? possimus. Autem, velit laudantium
          iusto quis iste asperiores modi quo reprehenderit?
        </SpecInfo>
        <SpecInfo title={t("landing-page.about_us-page.mission")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut
          laborum et necessitatibus, porro officiis amet fugit modi facilis
          possimus. Autem, velit laudantium iusto quis iste asperiores modi quo
          reprehenderit? possimus. Autem, velit laudantium iusto quis iste
          asperiores modi quo reprehenderit? possimus. Autem, velit laudantium
          iusto quis iste asperiores modi quo reprehenderit?
        </SpecInfo>
        <SpecInfo title={t("landing-page.about_us-page.service")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut
          laborum et necessitatibus, porro officiis amet fugit modi facilis
          possimus. Autem, velit laudantium iusto quis iste asperiores modi quo
          reprehenderit? possimus. Autem, velit laudantium iusto quis iste
          asperiores modi quo reprehenderit? possimus. Autem, velit laudantium
          iusto quis iste asperiores modi quo reprehenderit?
        </SpecInfo>
        <SpecInfo title={t("landing-page.about_us-page.features")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut
          laborum et necessitatibus, porro officiis amet fugit modi facilis
          possimus. Autem, velit laudantium iusto quis iste asperiores modi quo
          reprehenderit? possimus. Autem, velit laudantium iusto quis iste
          asperiores modi quo reprehenderit? possimus. Autem, velit laudantium
          iusto quis iste asperiores modi quo reprehenderit?
        </SpecInfo>
      </Container>
    </>
  );
};

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
          src="https://wp.salesforce.com/blog/wp-content/uploads/sites/2/2021/03/improve-team-efficiency-productivity-header.jpg"
          sx={{
            width: "100%",
            height: "500px",
            bgcolor: "gray",
            borderRadius: 10,
            objectFit: "cover",
          }}
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

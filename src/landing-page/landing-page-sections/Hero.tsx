import Lottie from "lottie-react";
import LearningLottie from "../../lotties/laptop-working.json";
import { FC } from "react";
import { SxProps } from "@mui/material";
import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  useColorScheme,
} from "@mui/joy";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ABOUT_US, REGISTER } from "../../routesPaths";

interface IHeroProps {}

export const Hero: FC<IHeroProps> = (props) => {
  const { t } = useTranslation();

  const { mode } = useColorScheme();

  const bgcolor = mode === "light" ? "#dee5f9" : "#717681";

  return (
    <Box>
      <Container sx={{ height: "100%", paddingBlock: 10 }}>
        <Grid
          container
          alignItems="center"
          spacing={1}
          sx={{ height: "100%", position: "static" }}
        >
          <Grid
            md={5}
            sx={{ display: "flex", flexDirection: "column", gap: 2, zIndex: 2 }}
            order={{ xs: 2, md: 1 }}
          >
            <Typography level="h1">
              {t("landing-page.hero-sec.title")}
            </Typography>
            <Typography level="body1">
              {t("landing-page.hero-sec.desc")}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button component={Link} to={REGISTER}>
                {t("landing-page.hero-sec.button-join")}
              </Button>
              <Button component={Link} to={ABOUT_US} variant="outlined">
                {t("landing-page.hero-sec.button-learn")}
              </Button>
            </Stack>
          </Grid>
          <Grid md={7} xs={10} order={{ xs: 1, md: 2 }}>
            <Box
              component={Lottie}
              animationData={LearningLottie}
              loop
              sx={{
                "& svg g:first-child g:first-child path:nth-child(1)": {
                  fill: bgcolor,
                },
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

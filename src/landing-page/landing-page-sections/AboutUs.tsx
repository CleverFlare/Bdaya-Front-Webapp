import { Container, Link, Sheet, Stack, Typography } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import { FC } from "react";
import { useTranslation } from "react-i18next";
interface IAboutUsProps {}

export const AboutUs: FC<IAboutUsProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Sheet>
      <Container sx={{ paddingBlock: 5 }}>
        <Stack alignItems="center">
          <Typography level="h2">
            {t("landing-page.about_us-sec.section_title")}
          </Typography>
        </Stack>
        <Typography sx={{ marginTop: 1 }}>
          {t("landing-page.about_us-sec.desc")}{" "}
          <Link
            component={RouterLink}
            to="/about-us"
            endDecorator={<LaunchIcon />}
          >
            {t("landing-page.about_us-sec.read_more")}
          </Link>
        </Typography>
      </Container>
    </Sheet>
  );
};

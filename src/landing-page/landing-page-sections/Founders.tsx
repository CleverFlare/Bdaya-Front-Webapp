import { Box, Card, CardCover, Container, Grid, Stack } from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FounderCard } from "../components/FounderCard";
import { SectionTitle } from "../components/SectionTitle";
interface IFoundersProps {}

export const Founders: FC<IFoundersProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ paddingBlock: 5 }}>
      <Container>
        <SectionTitle>{t("landing-page.founders-sec.title")}</SectionTitle>
        <Grid container sx={{ marginTop: 5 }} spacing={2}>
          <Grid md={4} sm={6} xs={12}>
            <FounderCard
              name={t("landing-page.founders-sec.ah_yus_name")}
              major={t("landing-page.founders-sec.ah_yus_major")}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <FounderCard
              name={t("landing-page.founders-sec.ab_big_name")}
              major={t("landing-page.founders-sec.ab_big_major")}
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <FounderCard
              name={t("landing-page.founders-sec.mh_sal_name")}
              major={t("landing-page.founders-sec.mh_sal_major")}
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

import { Box, Container, Sheet, Stack, Typography } from "@mui/joy";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { FC } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { useTranslation } from "react-i18next";
interface IFooterProps {}

export const Footer: FC<IFooterProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Sheet variant="soft" sx={{ paddingBlock: 3, marginTop: "auto" }}>
      <Container>
        <Stack alignItems="center">
          <Typography sx={{ opacity: 0.5 }} endDecorator={<CopyrightIcon />}>
            {t("landing-page.footer-text")}
          </Typography>
        </Stack>
      </Container>
    </Sheet>
  );
};

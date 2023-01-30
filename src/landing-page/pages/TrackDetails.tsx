import {
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
import { FC, useEffect } from "react";
import { ImageCover } from "../components/ImageCover";
import { useTranslation } from "react-i18next";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { TechList } from "../components/TechList";
import { BackButton } from "../../components/atoms/BackButton";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useDynamicTranslation from "../../hooks/useDynamicTranslation";
interface ITrackDetailsProps {}

export const TrackDetails: FC<ITrackDetailsProps> = (props) => {
  const { id } = useParams();

  const { t } = useTranslation();

  const dynamicTranslation = useDynamicTranslation();

  const tracks = useSelector((state: RootState) => state.tracks.value);

  let track = tracks.find((track) => String(track.id) === id);

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

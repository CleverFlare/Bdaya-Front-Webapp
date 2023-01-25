import {
  Chip,
  Container,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
} from "@mui/joy";
import { SpecInfo } from "../components/SpecInfo";
import { FC } from "react";
import { ImageCover } from "../components/ImageCover";
import { useTranslation } from "react-i18next";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { TechList } from "../components/TechList";
import { BackButton } from "../../components/atoms/BackButton";
interface ITrackDetailsProps {}

export const TrackDetails: FC<ITrackDetailsProps> = (props) => {
  const { t } = useTranslation();
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
            Track's Name
          </Typography>
        </Stack>
        <ImageCover src="https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png" />
        <Stack direction="row" gap={1}>
          <Typography>{t("landing-page.track_details-page.tech")}</Typography>
          <TechList
            list={[
              {
                name: "technology",
                src: "https://en.wikipedia.org/wiki/Technology",
              },
              {
                name: "technology",
                src: "https://en.wikipedia.org/wiki/Technology",
              },
              {
                name: "technology",
                src: "https://en.wikipedia.org/wiki/Technology",
              },
            ]}
          />
        </Stack>
        <SpecInfo title={t("landing-page.track_details-page.about")}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          adipisci sit iste facilis. Cumque, accusamus aspernatur. Natus aperiam
          magnam alias, dolore itaque vitae ea reprehenderit fuga sapiente,
          neque animi accusamus. Sequi odio illo vel placeat totam eveniet
          reiciendis? Non autem eaque temporibus officia, provident minus
          aliquid ad! Fugit aperiam provident ab vel commodi cupiditate ad, iste
          voluptatum amet nulla saepe! Illum ipsum, enim ullam officia hic unde
          nulla. Perferendis eius exercitationem doloremque qui, reprehenderit
          molestias repudiandae fugiat eveniet harum iure ducimus earum alias
          est, tempora minus aperiam, sed saepe rem.
        </SpecInfo>
        <SpecInfo title={t("landing-page.track_details-page.prereq")}>
          <List>
            <ListItemWidthDec>prerequisite</ListItemWidthDec>
            <ListItemWidthDec>prerequisite</ListItemWidthDec>
            <ListItemWidthDec>prerequisite</ListItemWidthDec>
            <ListItemWidthDec>prerequisite</ListItemWidthDec>
            <ListItemWidthDec>prerequisite</ListItemWidthDec>
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

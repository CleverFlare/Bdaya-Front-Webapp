import { FC, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/joy";
import Masonry from "react-masonry-css";
import photos from "./images";
import { GalleryImg } from "../components/GalleryImg";
import { Lightbox } from "../../components/molecules/Lightbox";
import { useUpdate } from "../../hooks";
import { useTranslation } from "react-i18next";
interface IGalleryProps {}

export const Gallery: FC<IGalleryProps> = (props) => {
  const { t } = useTranslation();
  const [selectedPicture, setSelectedPicture] = useState<number>(0);
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  function handlePreviewPic(index: number) {
    setSelectedPicture(index);
    setOpenLightbox(true);
  }

  function handleCloseLightbox() {
    setOpenLightbox(false);
  }

  return (
    <>
      <Container
        component={Stack}
        spacing={2}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <Typography level="h2" fontWeight="bold">
          {t("landing-page.gallery-page.title")}
        </Typography>
        <Lightbox
          open={openLightbox}
          images={photos}
          init={selectedPicture}
          onClose={handleCloseLightbox}
          loop
        />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((img: any, index: number) => (
            <GalleryImg
              src={img}
              key={crypto.randomUUID()}
              onClick={() => handlePreviewPic(index)}
            />
          ))}
        </Masonry>
      </Container>
    </>
  );
};

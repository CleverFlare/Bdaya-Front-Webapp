import { Box } from "@mui/joy";
import { FC } from "react";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
interface IProjectPreviewSliderProps {
  images: string[];
}

export const ProjectPreviewSlider: FC<IProjectPreviewSliderProps> = (props) => {
  return (
    <Box
      component={Swiper}
      sx={{
        borderRadius: 10,
        maxHeight: "700px",
        color: "#80808036",
        "& .swiper-wrapper": {
          height: "100% !important",
        },
        "& .swiper-slide": {
          height: "auto !important",
        },
        "& .swiper-pagination-bullet": {
          borderRadius: 2,
          opacity: 0.5,
          bgcolor: "primary.solidBg",
          width: 15,
          height: 15,
        },
        "& .swiper-pagination-bullet-active": {
          opacity: 1,
          bgcolor: "primary.solidBg",
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="direction-agnostic"
    >
      {props.images.map((image) => (
        <SwiperSlide key={`image preview ${crypto.randomUUID()}`}>
          <Box
            component="img"
            src={image}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
      ))}
    </Box>
  );
};

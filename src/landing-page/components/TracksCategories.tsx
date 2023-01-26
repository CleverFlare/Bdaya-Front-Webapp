import { Box, Chip, Radio, Stack, Typography } from "@mui/joy";
import CheckIcon from "@mui/icons-material/Check";

import { FC, useState } from "react";
import { FreeMode } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
interface ITracksCategoriesProps {
  list?: string[];
  onSelect?: (category: string) => void;
}

export const TracksCategories: FC<ITracksCategoriesProps> = (props) => {
  const categories = ["All", ...(props.list || [])];
  const [selected, setSelected] = useState<string>(categories[0]);

  function selectCategory(e: any) {
    if (e.target.checked) setSelected(e.target.value);
    props.onSelect && props.onSelect(e.target.value);
  }

  return (
    <Stack spacing={1}>
      <Typography level="body3" textTransform="uppercase" fontWeight="lg">
        categories
      </Typography>
      <Box
        component={Swiper}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={5}
        modules={[FreeMode]}
        sx={{
          "& .swiper-slide": {
            width: "auto !important",
          },
        }}
      >
        {categories.map((category) => {
          const checked = category === selected;
          const color = checked ? "primary" : "neutral";
          return (
            <SwiperSlide key={`category ${crypto.randomUUID()}`}>
              <Chip
                variant="outlined"
                color={color}
                startDecorator={
                  checked && (
                    <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                  )
                }
              >
                <Radio
                  variant="outlined"
                  disableIcon
                  overlay
                  color={color}
                  label={category}
                  value={category}
                  checked={checked}
                  onChange={selectCategory}
                />
              </Chip>
            </SwiperSlide>
          );
        })}
      </Box>
    </Stack>
  );
};

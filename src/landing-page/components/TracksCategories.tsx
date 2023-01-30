import { Box, Chip, Radio, Stack, Typography } from "@mui/joy";
import CheckIcon from "@mui/icons-material/Check";

import { FC, useState } from "react";
import { FreeMode } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useTranslation } from "react-i18next";

type Category = {
  name: string;
  id: string | number;
};

interface ITracksCategoriesProps {
  list?: Category[];
  onSelect?: (category: string) => void;
}

export const TracksCategories: FC<ITracksCategoriesProps> = (props) => {
  const { t } = useTranslation();
  const categories = [{ name: "All", id: null }, ...(props.list || [])];
  const [selected, setSelected] = useState<string | number | null>(null);

  function selectCategory(e: any) {
    if (e.target.checked) setSelected(e.target.value || null);
    props.onSelect && props.onSelect(e.target.value || null);
  }

  return (
    <Stack spacing={1}>
      <Typography level="body3" textTransform="uppercase" fontWeight="lg">
        {t("landing-page.projects-page.categories")}
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
          const checked = String(category.id) === String(selected);
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
                  label={category.name}
                  value={category.id || ""}
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

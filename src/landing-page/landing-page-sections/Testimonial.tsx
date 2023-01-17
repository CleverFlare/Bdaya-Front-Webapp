import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SectionTitle } from "../components/SectionTitle";
import { TestimonialCard } from "../components/TestimonialCard";
import { Navigation } from "swiper";
interface ITestimonialProps {}

export const Testimonial: FC<ITestimonialProps> = (props) => {
  const { t } = useTranslation();

  const responsive = {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  };
  return (
    <Box sx={{ paddingBlock: 5 }}>
      <Container>
        <SectionTitle>{t("landing-page.testimonial-sec.title")}</SectionTitle>

        <Box
          sx={{ marginTop: 5 }}
          component={Swiper}
          modules={[Navigation]}
          spaceBetween={50}
          breakpoints={responsive}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          navigation
          loop
          className="direction-agnostic"
        >
          <SwiperSlide>
            <TestimonialCard
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              author="Scarlet James"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
              harum velit, magnam explicabo quisquam perspiciatis vel iusto enim
              iste. Ex, nulla cumque. Repudiandae iste excepturi molestias.
              Nulla, magni? Tempora.
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              author="Scarlet James"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
              harum velit, magnam explicabo quisquam perspiciatis vel iusto enim
              iste. Ex, nulla cumque. Repudiandae iste excepturi molestias.
              Nulla, magni? Tempora.
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              author="Scarlet James"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
              harum velit, magnam explicabo quisquam perspiciatis vel iusto enim
              iste. Ex, nulla cumque. Repudiandae iste excepturi molestias.
              Nulla, magni? Tempora.
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              author="Scarlet James"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
              harum velit, magnam explicabo quisquam perspiciatis vel iusto enim
              iste. Ex, nulla cumque. Repudiandae iste excepturi molestias.
              Nulla, magni? Tempora.
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              author="Scarlet James"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
              harum velit, magnam explicabo quisquam perspiciatis vel iusto enim
              iste. Ex, nulla cumque. Repudiandae iste excepturi molestias.
              Nulla, magni? Tempora.
            </TestimonialCard>
          </SwiperSlide>
        </Box>
      </Container>
    </Box>
  );
};

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
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Empty } from "../../illustrations/Empty";
interface ITestimonialProps {}

export const Testimonial: FC<ITestimonialProps> = (props) => {
  const testimonials = useSelector(
    (state: RootState) => state.testimonials.value
  );
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

  const isEmpty = !Boolean(testimonials.length);
  return (
    <Box sx={{ paddingBlock: 5 }}>
      <Container>
        <SectionTitle>{t("landing-page.testimonial-sec.title")}</SectionTitle>

        {isEmpty && (
          <Stack justifyContent="center" alignItems="center">
            <Empty>currently there are no testimonials</Empty>
          </Stack>
        )}
        {!isEmpty && (
          <Box
            sx={{ marginTop: 5 }}
            component={Swiper}
            modules={[Navigation]}
            spaceBetween={50}
            breakpoints={responsive}
            navigation
            loop
            className="direction-agnostic"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`testimonial ${index}`}>
                <TestimonialCard
                  src={testimonial.pfp || undefined}
                  author={testimonial.author}
                  track={testimonial.track}
                >
                  {testimonial.body}
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

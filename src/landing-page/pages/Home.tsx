import { FC } from "react";
import { Hero } from "../landing-page-sections/Hero";
import { AboutUs } from "../landing-page-sections/AboutUs";
import { Founders } from "../landing-page-sections/Founders";
import { Tracks } from "../landing-page-sections/Tracks";
import { Testimonial } from "../landing-page-sections/Testimonial";
interface IHomePageProps {}

export const HomePage: FC<IHomePageProps> = (props) => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Founders />
      <Tracks />
      <Testimonial />
    </>
  );
};

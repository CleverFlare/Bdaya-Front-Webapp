import { Sheet, Stack } from "@mui/joy";
import { Appbar } from "../components/organisms/Appbar";
import { Hero } from "../landing-page/landing-page-sections/Hero";
import { AboutUs } from "../landing-page/landing-page-sections/AboutUs";
import { Founders } from "../landing-page/landing-page-sections/Founders";
import { Tracks } from "../landing-page/landing-page-sections/Tracks";
import { Footer } from "../landing-page/landing-page-sections/Footer";
import { Testimonial } from "../landing-page/landing-page-sections/Testimonial";

function Main() {
  return (
    <Sheet
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Appbar />
      <Hero />
      <AboutUs />
      <Founders />
      <Tracks />
      <Testimonial />
      <Footer />
    </Sheet>
  );
}

export default Main;

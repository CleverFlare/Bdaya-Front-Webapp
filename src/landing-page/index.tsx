import { FC } from "react";
import { Sheet } from "@mui/joy";
import { Appbar } from "../components/organisms/Appbar";
import { Footer } from "./landing-page-sections/Footer";
import { HomePage } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import {
  ABOUT_US,
  GALLERY,
  PROJECTS,
  REGISTER,
  SIGNIN,
  TRACKS,
} from "../routesPaths";
import { AboutUs } from "./pages/AboutUs";
import { Gallery } from "./pages/Gallery";
import { ComingSoon } from "./pages/ComingSoon";

interface ILandingPageProps {}

export const LandingPage: FC<ILandingPageProps> = (props) => {
  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={ABOUT_US} element={<AboutUs />} />
        <Route path={GALLERY} element={<Gallery />} />
        <Route path={TRACKS} element={<ComingSoon />} />
        <Route path={PROJECTS} element={<ComingSoon />} />
        <Route path={SIGNIN} element={<ComingSoon />} />
        <Route path={REGISTER} element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Sheet>
  );
};

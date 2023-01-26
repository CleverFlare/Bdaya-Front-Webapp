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
  PROJECTS_DETAILS,
  REGISTER,
  SIGNIN,
  TRACKS,
  TRACK_DETAILS,
} from "../routesPaths";
import { AboutUs } from "./pages/AboutUs";
import { Gallery } from "./pages/Gallery";
import { ComingSoon } from "./pages/ComingSoon";
import { Tracks } from "./pages/Tracks";
import { TrackDetails } from "./pages/TrackDetails";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";

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
        <Route path={TRACKS} element={<Tracks />} />
        <Route path={TRACK_DETAILS} element={<TrackDetails />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={PROJECTS_DETAILS} element={<ProjectDetails />} />
        <Route path={SIGNIN} element={<ComingSoon />} />
        <Route path={REGISTER} element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Sheet>
  );
};

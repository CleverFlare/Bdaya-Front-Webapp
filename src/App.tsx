import { Route, Routes } from "react-router-dom";
import i18next from "i18next";
import Main from "./routes/Home";
import "./i18n";
import { Suspense } from "react";
import { LandingPage } from "./landing-page";
import { useOnMount } from "./hooks";
import { Loading } from "./components/atoms/Loading";

function App() {
  useOnMount(() => {
    switch (i18next.language) {
      case "ar":
        document.body.setAttribute("dir", "rtl");
        break;
      case "en":
        document.body.setAttribute("dir", "ltr");
        break;
    }

    console.log(
      "%cWelcome To Bdaya's Console",
      "padding: 5px; color: white; background: linear-gradient(to right, purple, blue); border-radius: 5px"
    );

    console.log(
      "%cNOTE!: this area could potentially be dangerous for people with no sufficient experience",
      "padding: 5px; color: white; background: red; border-radius: 5px"
    );
  });
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

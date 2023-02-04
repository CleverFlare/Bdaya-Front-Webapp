import { Route, Routes } from "react-router-dom";
import "./i18n";
import { Suspense } from "react";
import { LandingPage } from "./landing-page";
import { useOnMount } from "./hooks";
import { Loading } from "./components/atoms/Loading";
import i18next from "i18next";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Workspace } from "./workspace";

function App() {
  const user = useSelector((state: RootState) => state.user.value);
  useOnMount(() => {
    switch (i18next.language) {
      case "en":
        document.body.setAttribute("dir", "ltr");
        break;
      case "ar":
        document.body.setAttribute("dir", "rtl");
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
          <Route path="/*" element={user ? <Workspace /> : <LandingPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Page";
import NotFound from "./pages/404";
import Loading from "./components/Loading";
import AppX from "./pages/app/index";

import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/app/*"
        element={
          <Suspense fallback={<Loading />}>
            <AppX />
          </Suspense>
        }
      />
      <Route
        path="/sign-in/*"
        element={<SignIn />}
      />
      <Route
        path="/sign-up/*"
        element={<SignUp />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

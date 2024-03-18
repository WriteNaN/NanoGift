import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Page";
import NotFound from "./pages/404";
import Loading from "./components/Loading";
import AppX from "./pages/app/index";

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
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

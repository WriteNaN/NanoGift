import Filter from "../components/Effect";
import FirefliesX from "../components/Fireflies";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

import "../styles/index.css";
import "../styles/dialog.css";
import "../styles/glow.css";

export default function Page() {
  return (
    <>
    <Helmet>
      <title>Nano Gift</title>
    </Helmet>
    <div className="!overflow-x-hidden">
      <div style={{ zIndex: 99 }}>
      <Navbar />
      </div>

      <Filter />
      <FirefliesX />
      
      <img src="/img/overlay-1.png" className="overlay-t-bg select-none pointer-events-none" />
      <img src="/img/overlay-1.png" className="overlay-r-bg select-none pointer-events-none" />
    </div>
    </>
  );
}

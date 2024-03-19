import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../styles/index.css";
import "../styles/glow.css"
import Filter from "../components/Effect";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Nano Gift - 404</title>
      </Helmet>
        <div className="bg-transparent overflow-hidden glow-blue h-screen w-screen flex items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-300 md:text-4xl">
                That page doesn't exist.
              </p>
              <p className="mb-4 text-lg font-light text-gray-400">
                Sorry, we can't find that page. Navigate through homepage instead!{" "}
              </p>
              <Link
                to="/"
                className="inline-flex glow-blue-box-3 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
              >
                Back to Homepage
              </Link>
            </div>
          </div>

          <Filter />
        </div>
    </>
  );
}

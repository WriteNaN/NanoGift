import { Helmet } from "react-helmet";
import { SignUp as Register } from "@clerk/clerk-react";

import "../../styles/glow.css";
import "../../styles/index.css";

import Filter from "../../components/Effect";

export default function SignIn() {
    return (
        <div className="fadeIn">
            <Helmet>
                <title>Nano Gift - Register</title>
            </Helmet>

            <div className={`fixed glow-blue min-h-screen items-center justify-center inset-0`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Register />
                </div>
            </div>

            <Filter />
            <img src="/img/overlay-1.png" className="overlay-t-bg select-none pointer-events-none" />
            <img src="/img/overlay-1.png" className="overlay-r-bg select-none pointer-events-none" />
        </div>
    );
}

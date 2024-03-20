import { Helmet } from "react-helmet";
import { SignIn as Login } from "@clerk/clerk-react";
import {dark} from "@clerk/themes";

import "../../styles/glow.css";
import "../../styles/index.css";

import Filter from "../../components/Effect";

export default function SignIn() {
    return (
        <div className="fadeIn">
            <Helmet>
                <title>Nano Gift - Login</title>
            </Helmet>

            <div className={`fixed glow-blue min-h-screen items-center justify-center inset-0`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Login appearance={{
                        baseTheme: dark
                    }} />
                </div>
            </div>

            <Filter />
            <img src="/img/overlay-1.png" className="overlay-t-bg select-none pointer-events-none" />
            <img src="/img/overlay-1.png" className="overlay-r-bg select-none pointer-events-none" />
        </div>
    );
}

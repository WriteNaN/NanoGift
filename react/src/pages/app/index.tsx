import { Helmet } from "react-helmet";
import { useAuth } from "@clerk/clerk-react";

import "../../styles/index.css";

export default function App() {
  const { isSignedIn } = useAuth(); 

  if (!isSignedIn) {
    window.location.href = "/sign-in";
    return null; 
  }

  return (
    <>
    <Helmet>
      <title>Nano Gift - App</title>
    </Helmet>

    <div className="min-h-screen">
      <p>.</p>
    </div>
    </>
  );
}

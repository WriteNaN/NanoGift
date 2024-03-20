import { Helmet } from "react-helmet";
import { useAuth } from "@clerk/clerk-react";

import "../../styles/index.css";

export default function App() {
  const { userId } = useAuth(); 
  return (
    <>
    <Helmet>
      <title>Nano Gift - App</title>
    </Helmet>

    <div className="min-h-screen">
      <p>{userId}</p>
    </div>
    </>
  );
}

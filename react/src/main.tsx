import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={"pk_live_Y2xlcmsubmFuby5naWZ0JA"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);

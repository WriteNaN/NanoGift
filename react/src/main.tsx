import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={"pk_test_bWFpbi1odW1wYmFjay0xOS5jbGVyay5hY2NvdW50cy5kZXYk"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);

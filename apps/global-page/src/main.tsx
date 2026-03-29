import { view } from "@forge/bridge";
import Providers from "@repo/trpc-react/providers";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./index.css";

void view.theme.enable();

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);

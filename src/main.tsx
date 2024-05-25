import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "./scss/_fonts.scss";
import { ImageProvider } from "./certificates/context/ImageProvider.tsx";
import { router } from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ImageProvider>
      <RouterProvider router={router} />
    </ImageProvider>
  </React.StrictMode>
);

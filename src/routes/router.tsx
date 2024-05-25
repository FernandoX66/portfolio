import { Navigate, createBrowserRouter } from "react-router-dom";

import { Certificates } from "../certificates/pages/Certificates";
import { CertificationsApp } from "../CertificationsApp";
import { Home } from "../home/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CertificationsApp />,
    children: [
      {
        path: "certificates",
        element: <Certificates />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to="certificates" />,
      },
      {
        path: "*",
        element: <Navigate to="certificates" />,
      },
    ],
  },
]);

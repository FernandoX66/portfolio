import { Outlet } from "react-router-dom";

import "./CertificationsApp.scss";
import { Footer } from "./core/components/Footer/Footer";
import { Header } from "./core/components/Header/Header";

export const CertificationsApp = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

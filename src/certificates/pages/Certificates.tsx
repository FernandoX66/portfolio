import "./Certificates.scss";
import { CertificationImage } from "../components/CertificationImage/CertificationImage";
import { ImagesList } from "../components/ImagesList/ImagesList";

export const Certificates = () => {
  return (
    <main>
      <div className="container main-content">
        <h1>Certificates</h1>

        <div className="blur"></div>
        <div className="blur"></div>

        <CertificationImage />
        <ImagesList />
      </div>
    </main>
  );
};

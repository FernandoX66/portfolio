import { useContext } from "react";

import "./ImagesList.scss";
import { ImageContext } from "../../context/ImageContext";

export const ImagesList = () => {
  const { certifications, activeCertificationId, setActiveCertificationId } =
    useContext(ImageContext);

  const handleImageClick = (certificationId: number) => {
    setActiveCertificationId(certificationId);
  };

  return (
    <div className="images-list">
      {certifications.map(({ url, id }) => {
        return (
          <img
            className={id === activeCertificationId ? "active" : ""}
            key={id}
            src={url}
            alt="certification"
            onClick={() => handleImageClick(id)}
          />
        );
      })}
    </div>
  );
};

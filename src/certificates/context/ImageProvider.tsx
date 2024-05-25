import { useState } from "react";

import { CERTIFICATIONS } from "../constants/certifications";
import { ImageContext } from "./ImageContext";

interface Props {
  children: React.ReactNode;
}

export const ImageProvider = ({ children }: Props) => {
  const [activeCertificationId, setActiveCertificationId] = useState(1);
  const getActiveCertification = () => {
    return CERTIFICATIONS.find(
      (certification) => certification.id === activeCertificationId
    )!;
  };

  return (
    <ImageContext.Provider
      value={{
        certifications: CERTIFICATIONS,
        activeCertificationId,
        setActiveCertificationId,
        getActiveCertification,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

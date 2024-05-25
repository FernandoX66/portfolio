import { useContext, useMemo } from "react";

import { Tilt } from "react-tilt";

import "./CertificationImage.scss";
import { defaultOptions } from "../../../tilt.config";
import { ImageContext } from "../../context/ImageContext";

export const CertificationImage = () => {
  const { getActiveCertification } = useContext(ImageContext);
  const certification = useMemo(
    () => getActiveCertification(),
    [getActiveCertification]
  );

  return (
    <div className="certification-image">
      <Tilt options={defaultOptions}>
        <img src={certification.url} alt="certification" />
      </Tilt>

      {certification.verificationUrl && (
        <a target="_blank" href={certification.verificationUrl}>
          Check credential
        </a>
      )}
    </div>
  );
};

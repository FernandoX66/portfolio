import { createContext } from "react";

import { Certification } from "../models/certification.model";

interface IImageContext {
  certifications: Array<Certification>;
  activeCertificationId: number;
  setActiveCertificationId: (certificationId: number) => void;
  getActiveCertification: () => Certification;
}

export const ImageContext = createContext<IImageContext>({
  certifications: [],
  activeCertificationId: 1,
  setActiveCertificationId: () => {},
  getActiveCertification: () => {
    return {
      id: 1,
      url: "",
    };
  },
});

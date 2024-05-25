import advancedAngularWorkshopCertificateImg from "../../assets/img/advanced-angular-workshop-certificate.png";
import angularAcceleratorProgramCertificateImg from "../../assets/img/angular-accelerator-program-certificate.png";
import angularGlobalSummit23CertificateImg from "../../assets/img/angular-global-summit-23.png";
import angularIntermediateCertificationImg from "../../assets/img/angular-intermediate-certification.png";
import angularSignalsCertificateImg from "../../assets/img/angular-signals-certificate.png";
import certifiedAngularDeveloperImg from "../../assets/img/angular-certified-developer.png";
import rxjsBasicsCertificate from "../../assets/img/rxjs-basics-certificate.png";
import { Certification } from "../models/certification.model";

export const CERTIFICATIONS: Array<Certification> = [
  {
    id: 1,
    url: certifiedAngularDeveloperImg,
    verificationUrl: "https://interstate21.com/certificate/?code=3G11IRV",
  },
  {
    id: 2,
    url: advancedAngularWorkshopCertificateImg,
  },
  {
    id: 3,
    url: angularAcceleratorProgramCertificateImg,
  },
  {
    id: 4,
    url: angularIntermediateCertificationImg,
    verificationUrl: "https://www.hackerrank.com/certificates/0e3d61a1bb2e",
  },
  {
    id: 5,
    url: angularSignalsCertificateImg,
  },
  {
    id: 6,
    url: angularGlobalSummit23CertificateImg,
    verificationUrl:
      "https://certificate.givemycertificate.com/c/29af17af-db20-4189-96e6-53e6c7aee63d",
  },
  {
    id: 7,
    url: rxjsBasicsCertificate,
  },
];

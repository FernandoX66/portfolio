import "./Footer.scss";
import { BADGES } from "../../../certificates/constants/badges";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="badges">
          <h2>Badges</h2>

          {BADGES.map(({ url, id, verificationUrl }) => (
            <a key={id} target="_blank" href={verificationUrl}>
              <img src={url} alt="Badge" />
            </a>
          ))}
        </div>

        <div className="personal-information">
          <p>Developed by Fernando Villanueva</p>
          <p>Front-End 🅰ngular Developer & Angular Trainer</p>

          <h2>Contact information</h2>

          <p>
            <strong>Email: </strong>
            <a href="mailto:fernandoe.villanueval@gmail.com">
              fernandoe.villanueval@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

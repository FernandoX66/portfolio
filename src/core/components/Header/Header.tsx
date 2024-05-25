import "./Header.scss";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container header">
        <a href="/">
          Fern<span>&lt;a&gt;</span>ndo;
        </a>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

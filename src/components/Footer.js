import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faSnapchatSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-section">
      <a href="twitter.com">
        <span className="button-icon button-email_icon">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </span>
      </a>

      <a href="facebook.com">
        <span className="button-icon button-email_icon">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </span>
      </a>

      <a href="snapchat.com">
        <span className="button-icon button-email_icon">
          <FontAwesomeIcon icon={faSnapchatSquare} />
        </span>
      </a>

      <a href="github.com">
        <span className="button-icon button-email_icon">
          <FontAwesomeIcon icon={faGithubSquare} />
        </span>
      </a>
    </div>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSnapchat,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="twitter.com">
        <span className="button-email_icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>

      <a href="facebook.com">
        <span className="button-email_icon">
          <FontAwesomeIcon icon={faFacebook} />
        </span>
      </a>

      <a href="snapchat.com">
        <span className="button-email_icon">
          <FontAwesomeIcon icon={faSnapchat} />
        </span>
      </a>

      <a href="github.com">
        <span className="button-email_icon">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
    </div>
  );
}

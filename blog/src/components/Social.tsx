import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Socials = [
  { name: "Twitter", iconName: faTwitter, url: "https://twitter.com" },
  { name: "Facebook", iconName: faFacebook, url: "https://www.facebook.com" },
  { name: "GitHub", iconName: faGithub, url: "https://github.com" },
];

export const Social = ({ iconSize = "initial" }) => {
  return (
    <ul className={`flex ${iconSize}`}>
      {Socials.map(({ name, iconName, url }) => (
        <li key={name}>
          <a href={url}>
            <FontAwesomeIcon icon={iconName} />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-row items-center">
      <SocialIcon
        url="https://www.youtube.com/@monles_yen"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.youtube.com/@monles_yen"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.youtube.com/@monles_yen"
        fgColor="gray"
        bgColor="transparent"
      />

      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <p className="uppercase hidden md:inline-flex text-sm text-gray">
        Get In Touch
      </p>
    </div>
  );
}

export default Header;

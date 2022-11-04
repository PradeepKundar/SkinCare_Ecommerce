import React from "react";

import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";
const Footer = () => {
  return (
    <div className="{css.FooterWrapper}">
      <hr />
      <div className={css.Footer}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>106 whitefield Bangalore, Pc-560067</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:123-456-7890">123-456-7890</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:supportline@amazon.com">supportline@amazon.com</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>sign-in</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Terms & Conditions</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span> Copyright &#169;2022 by Pradeep</span>
        <span>All rights are reserved</span>
      </div>
    </div>
  );
};

export default Footer;

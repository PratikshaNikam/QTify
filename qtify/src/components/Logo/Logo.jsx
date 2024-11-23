import React from "react";
import LogoImage from "../../assets/qtify_logo.png";

export default function Logo() {
  return (<div className="logo">
    <img src={LogoImage} alt="logo" width={67} />
  </div>);
}

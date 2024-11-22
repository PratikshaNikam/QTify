import styles from "./Hero.module.css";
import React from "react";
function Hero() {
  return(
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={require("../../assets/vibrating-headphone.png")}
          alt="headphone_image"
          width={212} />
      </div>
    </div>
  )
}

export default Hero;
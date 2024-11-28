import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="Hero-title">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../assets/vibrating-headphone.png")}
          width={212}
          alt="headphones"
          className={styles.HeroImage}
        />
      </div>
    </section>
  );
}

export default Hero;

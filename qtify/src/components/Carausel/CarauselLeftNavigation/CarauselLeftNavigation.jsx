import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarauselLeftNavigation.module.css";
import LeftArrow  from "../../../assets/left.png";



export default function CarauselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  
  swiper.on("slideChange", function() {
    setIsBeginning(swiper.isBeginning);
  });

  return (
    <div classNmame={styles.leftNavigation}>
      {/* {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}></LeftArrow>} */}
      {isBeginning && <button onClick={()=>swiper.slidePrev()}>
        <img src={LeftArrow } alt="LeftArrow"  /></button>}

    </div>
  )
 

}
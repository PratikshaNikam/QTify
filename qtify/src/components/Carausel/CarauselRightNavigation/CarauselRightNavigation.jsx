import React, { useState , useEffect} from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarauselRightNavigation.module.css";
import  RightArrow from "../../../assets/right.png";



export default function CarauselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  
  
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  

  return (
    <div classNmame={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}></RightArrow>}

    </div>
  )
 

}
import React, { useEffect, useRef } from 'react';
import styles from "./carausel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useSwiper } from "swiper/react";
import  CarauselLeftNavigation from "./CarauselLeftNavigation/CarauselLeftNavigation";
import CarauselRightNavigation from "./CarauselRightNavigation/CarauselRightNavigation";


const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  
  return <></>
}

function Carausel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px  20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <div>
          <CarauselLeftNavigation />
          <CarauselRightNavigation />
        </div>
        {data.map((ele) => (
          <SwiperSlide >
            {renderComponent(ele)}
          </SwiperSlide>
        ))}

      </Swiper>
   </div>
 )

}
export default Carausel;

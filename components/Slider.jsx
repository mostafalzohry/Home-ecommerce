import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { getData } from "../Data/Getdata.jsx";

function Slider() {
  const [sliders, setSliders] = useState([]);
  
  useEffect(() => {
    getData("https://api-task.bit68.com/en/api/slider_image/")
      .then((res) => {
        setSliders(res.results);
        console.log(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        paginationtype="bullets"
        modules={[Pagination]}
        className="w-full h-[200px] md:h-[300px] lg:h-[470px]"
      >
        <div className="flex ">
          <span className="absolute top-[50%] translate-y-[-50%] z-10 left-6">
            <SwiperPrevButton />
          </span>
          <span className="absolute top-[50%] translate-y-[-50%] z-10 right-6">
            <SwiperNextButton />
          </span>
        </div>
        {sliders.length > 0 &&
          sliders?.map((slider) => {
            return (
              <SwiperSlide key={slider.id}>
                <img
                  src={slider.image}
                  alt="slider"
                  className="w-full h-full"
                />
              </SwiperSlide>
            );
          })}
      </Swiper> 
    </div>
  );
}

export default Slider;

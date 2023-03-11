import Image from "next/image";
import { useEffect, useState } from "react";
import { getData } from "../Data/Getdata.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";

 function Brands() {
  const [brands, setBrands] = useState([]);

  
 
  useEffect(() => {
    getData("https://api-task.bit68.com/en/api/brands/")
      .then((res) => {
        setBrands(res.results);
        console.log(res.results);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" mx-auto py-6 px-4 md:px-0" style={{ width: "80%" }}>
      <h1 className="headertext">Popular Brands</h1>

      <Swiper
        spaceBetween={0}
        loop={true}
        modules={[Pagination]}
        className="w-full h-fit mx-[50px] my-4"
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <div className="flex ">
          <span className="absolute top-[40%] translate-y-[-50%] z-10 left-[-10px]">
            <SwiperPrevButton />
          </span>
          <span className="absolute top-[40%] translate-y-[-50%] z-10 right-[-10px]">
            <SwiperNextButton />
          </span>
        </div>

        {brands.map((brand) => {
          return (
            <SwiperSlide
              key={brand.id}
              className="flex justify-center items-center"
            >
              <div className="w-[50%] mx-auto rounded-full overflow-hidden">
                <Image
                  src={brand.image}
                  width={80}
                  height={80}
                  alt="slider"
                  className="w-full mx-auto bg-secondary p-6"
                />
              </div>
              <p className="w-full text-center mt-2 font-bold">
                Up to {brand.sale_percentage}%
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}


export default Brands
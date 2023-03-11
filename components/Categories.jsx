import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { getData } from "../Data/Getdata.jsx";

function Categories() {
  
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getData("https://api-task.bit68.com/en/api/categories/")
      .then((res) => {
        setcategories(res.results);
        console.log(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-auto py-6 px-4 " style={{ width: "80%" }}>
      <h1 className="headertext">Main Categories</h1>

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
        {categories.length > 0 &&
          categories?.map((category) => {
            return (
              <SwiperSlide
                key={category.id}
                className="flex justify-center items-center"
              >
                <Image
                  src={category.image}
                  width={170}
                  height={170}
                  alt="slider"
                  className="mx-auto"
                />
                <p className="w-full text-center mt-2 font-bold">
                  {category.name}
                </p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}


export default Categories
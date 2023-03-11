import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { getData } from "../Data/Getdata.jsx";


function Item({ title }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData("https://api-task.bit68.com/en/api/items/")
      .then((res) => {
        setItems(res.results);
        console.log(res.results);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" mx-auto py-4 px-4 md:px-0 my-6" style={{ width: "80%" }}>
      <h1 className="headertext">{title}</h1>

      <Swiper
        spaceBetween={0}
        loop={true}
        modules={[Pagination]}
        className="w-full h-fit mx-[50px] my-4"
        slidesPerView={5}
        slidesPerGroup={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center"
            >
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="slider"
                className="mx-auto w-[60%]"
              />
              <p className="w-full text-center mt-2 font-bold">{item.name}</p>
              <p className="w-full text-center mt-2 text-xl font-extrabold">
                {Number(item.price_before_sale) -
                  Number(item.price_after_sale) ===
                0 ? (
                  <span className="text-secondary">
                    EGP {item.price_before_sale}
                  </span>
                ) : (
                  <p className="text-red-700">
                    <span>EGP {item.price_after_sale}</span>
                    <span className="text-sm">
                      {" "}
                      save {item.price_before_sale - item.price_after_sale}
                    </span>
                  </p>
                )}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="h-[2px] bg-gray-200 rounded w-full mt-4"></div>
      <div className="h-[4px] bg-secondary rounded w-[30%] mt-[-3px]"></div>
    </div>
  );
}


export default Item
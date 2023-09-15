"use client";

import { useRef } from "react";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from 'swiper/types';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ArrowIcon } from "./Icons";
import homeImage from "../../public/mainSlider/1.jpg";

export const HomePageCarousel = () => {
 const swiperRef = useRef<SwiperCore>();
 return (
  <div className="relative">
   <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    autoplay={{ disableOnInteraction: false, delay: 3000 }}
    pagination={{ clickable: true }}
    onBeforeInit={(swiper) => {
     swiperRef.current = swiper;
    }}
    className="rounded-xl"
   >
    <SwiperSlide>
     <Image
      src={homeImage}
      alt="My image"
      width={1280}
      height={512}
      className="object-cover rounded-xl"
      priority
      quality={100}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      src={homeImage}
      alt="My image"
      width={1280}
      height={512}
      className="object-cover rounded-xl"
      priority
      quality={100}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      src={homeImage}
      alt="My image"
      width={1280}
      height={512}
      className="object-cover rounded-xl"
      priority
      quality={100}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      src={homeImage}
      alt="My image"
      width={1280}
      height={512}
      className="object-cover rounded-xl"
      priority
      quality={100}
     />
    </SwiperSlide>
   </Swiper>

   <div className="hidden sm:block">
    <button
     onClick={() => swiperRef.current?.slidePrev()}
     className="absolute top-1/2 -translate-y-1/2 left-3 w-8 h-8 rounded-full bg-white/30 z-10 flex items-center justify-center hover:scale-105 transition-all"
    >
     <ArrowIcon />
    </button>
    <button
     onClick={() => swiperRef.current?.slideNext()}
     className="absolute top-1/2 -translate-y-1/2 rotate-180 right-3 w-8 h-8 rounded-full bg-white/30 z-10 flex items-center justify-center hover:scale-105 transition-all"
    >
     <ArrowIcon />
    </button>
   </div>
  </div>
 );
};

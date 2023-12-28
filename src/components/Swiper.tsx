// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./swiper.css"

// import required modules
import { Navigation } from 'swiper/modules';

export default function MySwiper() {
  return (
    <div className='max-w-[500px] md:w-[100%]  ml-[40px] md:mx-auto flex'>
      <Swiper 
        slidesPerView={7}
        spaceBetween={10}
       
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper grow"
         navigation={true} >
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>  <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
      </SwiperSlide>
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>  <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
      </SwiperSlide>
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>  <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
      </SwiperSlide>
        <SwiperSlide>
        <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </SwiperSlide>
        <SwiperSlide>  <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
      </SwiperSlide>
     
      </Swiper>
    </div>
  );
}

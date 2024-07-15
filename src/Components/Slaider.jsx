// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slaider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className="bg-slide" style={{
                    backgroundImage: 'url(ride1.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh'
                    // Adjust height as needed
                }}></div></SwiperSlide>
                <SwiperSlide><div className="bg-slide" style={{
                    backgroundImage: 'url(ride2.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh'
                    // Adjust height as needed
                }}></div></SwiperSlide>
                <SwiperSlide><img src="pizza.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="pizza.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="pizza.jpeg" /></SwiperSlide>
                {/* <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
};

export default Slaider;
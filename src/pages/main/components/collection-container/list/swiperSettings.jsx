import {Mousewheel, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';


export const swiperModules = [Mousewheel, Autoplay];

export const swiperOptions = {
  mousewheel: true,
  spaceBetween: 50,
  autoplay: { delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
};
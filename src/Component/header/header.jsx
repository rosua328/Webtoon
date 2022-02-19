import "./header.css";
import { AiOutlineAlert, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Daily from "../../Page/daily";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-menu">
          <div className="header-menu-left">
            <div className="header-menu-alert icon">
              <AiOutlineAlert />
            </div>
          </div>
          <div className="header-menu-right">
            <div className="header-menu-search icon">
              <AiOutlineSearch />
            </div>
            <div className="header-menu-mymenu icon">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
        <div className="header-nav">
          <Swiper
            // spaceBetween={50}
            slidesPerView={3}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(e) => console.log()}
            centeredSlides={true}
          >
            <SwiperSlide>
              {({ isActive }) =>
                isActive ? (
                  <>
                    <div className="b">요일별</div>
                    <Daily />
                  </>
                ) : (
                  <div className="a">요일별</div>
                )
              }
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) =>
                isActive ? (
                  <div className="b">랭킹</div>
                ) : (
                  <div className="a">랭킹</div>
                )
              }
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) =>
                isActive ? (
                  <div className="b">업로드순</div>
                ) : (
                  <div className="a">업로드순</div>
                )
              }
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) =>
                isActive ? (
                  <div className="b">선물함</div>
                ) : (
                  <div className="a">선물함</div>
                )
              }
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;

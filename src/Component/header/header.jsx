import "./header.css";
import { AiOutlineAlert, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Daily from "./../daily/daily";
import Category from "./../cate/category";

const Header = () => {
  const [cate] = useState(["요일별", "랭킹", "업로드순", "장르별"]);
  const [page, setpage] = useState();
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
            centeredSlides={true}
            onActiveIndexChange={() => {}}
          >
            {cate.map((value, i) => (
              <SwiperSlide key={i}>
                {
                  ({ isActive }) => (
                    <div
                      style={
                        isActive
                          ? { color: "rgb(255, 255, 255)" }
                          : { color: "rgb(73, 73, 73)" }
                      }
                      className="b"
                    >
                      {value}
                    </div>
                  )
                  // {/* value는 요일, 랭킹, 업로드순, 장르별인게 맞으면 {value === "요일별" && <Daily />} 이런식으로 router 만드셈 */}
                }
              </SwiperSlide>
            ))}
          </Swiper>
          <Daily />
          {console.log(page)}
        </div>
      </div>
    </div>
  );
};

export default Header;

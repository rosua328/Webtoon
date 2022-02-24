import "./header.css";
import { AiOutlineAlert, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Daily from "../../Page/daily";
import { useState } from "react";

const Header = () => {
  const [cate, setCate] = useState(["요일별", "랭킹", "업로드순", "선물함"]);
  const [page, setpage] = useState();
  const field = (value) => {
    console.log(value);
    if (value === "요a일별") {
      setpage(<Daily />);
    }
  };

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
          >
            {cate.map((value, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) =>
                  isActive ? (
                    <>
                      <div className="b">{value}</div>
                      {/* {field(value)} */}
                    </>
                  ) : (
                    <div className="a">{value}</div>
                  )
                }
              </SwiperSlide>
            ))}
          </Swiper>
          {page}
        </div>
      </div>
    </div>
  );
};

export default Header;

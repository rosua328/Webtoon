import "./header.css";
import { AiOutlineAlert, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

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
        <div className="header-nav"></div>
      </div>
    </div>
  );
};

export default Header;

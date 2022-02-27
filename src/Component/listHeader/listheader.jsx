import "./listheader.css";
import { AiOutlineAlert, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Listheader = () => {
  return (
    <div>
      <div className="listheader-container">
        <div className="listheader-menu">
          <div className="listheader-menu-left">
            <div className="listheader-menu-alert icon">
              <AiOutlineAlert />
            </div>
          </div>
          <div className="listheader-menu-right">
            <div className="listheader-menu-search icon">
              <AiOutlineSearch />
            </div>
            <div className="listheader-menu-mymenu icon">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listheader;

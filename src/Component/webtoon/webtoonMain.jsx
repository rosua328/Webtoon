import "./webtoonMain.css";
import {
  AiOutlineMessage,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineUnorderedList,
  AiOutlineArrowLeft,
  AiOutlineLike,
} from "react-icons/ai";

const WebtoonMain = () => {
  return (
    <>
      <div className="web-header">
        <div className="web-header-left">
          <button className="web-back">
            <AiOutlineArrowLeft />
          </button>
        </div>
        <div className="web-header-center">1화</div>
        <div className="web-header-right"></div>
      </div>
      <div className="web-container">
        <div className="web-wrap">
          <img src="img/q.png" alt="" className="web-img" />
        </div>
      </div>
      <div className="web-menu">
        <div className="web-menu-wrap">
          <button className="web-btn">
            <AiOutlineCaretLeft />
          </button>
          <button className="web-btn">
            <AiOutlineMessage />
          </button>
          <button className="web-btn">
            <AiOutlineUnorderedList />
          </button>
          <button className="web-btn">
            <AiOutlineCaretRight />
          </button>
        </div>
      </div>
      <button className="web-btn-up">맨 위로</button>
      <div className="web-footer">
        <div className="web-good">
          <div className="web-good-count">123</div>
          <button className="web-good-icon">
            <AiOutlineLike />
          </button>
        </div>
        <div className="web-chat">
          <div className="web-chatMain">
            <div className="web-chat-title">
              <span className="web-chat-nick">가지랑</span>
              <span className="web-chat-day">2022.03.01</span>
            </div>
            <div className="web-chat-write">이거 재밌음</div>
          </div>
          <hr className="web-hr"></hr>
        </div>
      </div>
    </>
  );
};

export default WebtoonMain;

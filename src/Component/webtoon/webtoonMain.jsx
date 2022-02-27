import "./webtoonMain.css";

const WebtoonMain = () => {
  return (
    <>
      <div className="web-header">
        <div className="web-header-left">
          <button>뒤로</button>
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
        <button className="web-leftarrow">좌</button>
        <button className="web-chat">댓</button>
        <button className="web-list">리</button>
        <button className="web-rightarrow">우</button>
      </div>
    </>
  );
};

export default WebtoonMain;

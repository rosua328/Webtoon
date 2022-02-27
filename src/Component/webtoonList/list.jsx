import "./list.css";

const List = () => {
  return (
    <div>
      <div className="list-container">
        <div className="list-back">
          <div className="list-wrap">
            <div className="list-img">
              <img className="list-img-main" src={`img/22.png`} alt="" />
            </div>
            <hr />
            <div className="list-dev">
              <div className="list-dev-title">시한부 엑스트라의 시간</div>
              <div className="list-dev-arth">초바,kim,지은향</div>
              <div className="list-dev-jang">로맨스 판타지</div>
            </div>
          </div>
        </div>
        <div className="list-main-container">
          <div className="list-main-wrap">
            <button className="list-firstBtn">첫 화 보기</button>
            <div className="list-main"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

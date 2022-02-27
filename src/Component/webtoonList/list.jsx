import "./list.css";
import Listheader from "./../listHeader/listheader";
import Mainlist from "./mainList/mainlist";
import { comicItem } from "../../Data/comic";

const List = () => {
  return (
    <div className="list-container">
      <div className="list-back-container">
        <div className="list-header">
          <Listheader />
        </div>
        <div className="list-top">
          <div className="list-wrap">
            <div className="list-img">
              <img className="list-img-main" src={`img/zxc.png`} alt="" />
            </div>
            <hr />
            <div className="list-dev">
              <div className="list-dev-title">시한부 엑스트라의 시간</div>
              <div className="list-dev-arth">초바,kim,지은향</div>
              <div className="list-dev-jang">로맨스 판타지</div>
            </div>
          </div>
        </div>
      </div>
      <div className="list-main-container">
        <div className="list-main-wrap">
          <button className="list-firstBtn">첫 화 보기</button>
          <div className="list-main">
            {comicItem
              .slice(0)
              .reverse()
              .map((item) => (
                <Mainlist key={item.id} img={item.img} num={item.num} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

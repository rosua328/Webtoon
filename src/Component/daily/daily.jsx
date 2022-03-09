import { useEffect, useState } from "react";
import "./daily.css";
import { comicList } from "../../Data/comic";

const Daily = () => {
  const [itday, setday] = useState("mon");
  const [selectList, setList] = useState([
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일",
  ]);

  const dayit = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const handleChange = (e) => {
    setday(e.target.value);
  };

  const aa = new Date().getDay();
  const bb = dayit[aa];
  console.log(bb);

  const move = (item) => {
    console.log(item.id);
  };

  return (
    <div>
      <div className="daily-container">
        <div className="day-nav">
          {selectList.map((value, i) => (
            <label className="obj" key={i} onChange={handleChange}>
              <input type="radio" value={value} id={value} name="aa" />
              <span>{value}</span>
            </label>
          ))}
        </div>
        <div className="daily-items">
          {comicList.map((item) => (
            <div
              onClick={() => move(item)}
              className="comic-item"
              key={item.id}
            >
              <img className="comic-img" src={`img/${item.img}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daily;

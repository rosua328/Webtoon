import { useEffect, useState } from "react";
import "./daily.css";
import comicList from "./../Data/comic";

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

  const handleChange = (e) => {
    setday(e.target.value);
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
            <div className="comic-item" key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daily;

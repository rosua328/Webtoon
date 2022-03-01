import "./category.css";
import { useState } from "react";
import { comicList } from "../../Data/comic";

const Category = () => {
  const [itday, setday] = useState("mon");
  const [selectList, setList] = useState([
    "액션",
    "로맨스",
    "판타지",
    "드라마",
    "스포츠",
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
              <img className="comic-img" src={`img/${item.img}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

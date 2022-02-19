import "./daily.css";

const Daily = () => {
  return (
    <div>
      <div className="daily-container">
        <div className="daily-nav">
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>월</span>
          </label>
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>화</span>
          </label>
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>수</span>
          </label>
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>목</span>
          </label>
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>금</span>
          </label>
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>토</span>
          </label>
          <label className="obj">
            <input type="radio" name="daily" value="monday" />
            <span>일</span>
          </label>
        </div>
        <div className="daily-items"></div>
      </div>
    </div>
  );
};

export default Daily;

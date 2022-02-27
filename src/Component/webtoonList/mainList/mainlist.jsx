import "./mainlist.css";

const Mainlist = ({ img, num }) => {
  return (
    <div className="list-item-container">
      <img className="list-item-img" src={`img/${img}`} alt="" />
      <div className="list-item-dev">
        <div className="list-item-num">{`${num}화`}</div>
        <div className="list-item-date">21.01.15</div>
      </div>
    </div>
  );
};

export default Mainlist;

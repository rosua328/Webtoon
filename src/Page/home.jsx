import Header from "./../Component/header/header";
import Footer from "./../Component/footer/footer";
import Daily from "../Component/daily/daily";
import List from "./../Component/webtoonList/list";
import Listheader from "./../Component/listHeader/listheader";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Listheader />
      <List />
      <Footer />
    </div>
  );
};

export default Home;

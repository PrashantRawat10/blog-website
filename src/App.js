import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Carousel_cont,Post} from "./components/Post";
import RightBar from "./components/RightBar";
import CardsContainer from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mid-sec">
        <Carousel_cont />
        {/* <Post></Post> */}
        {/* <RightBar></RightBar> */}
      </div>
      <CardsContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

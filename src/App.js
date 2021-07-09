import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import RightBar from "./components/RightBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mid-sec">
        <Post></Post>
        <RightBar></RightBar>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

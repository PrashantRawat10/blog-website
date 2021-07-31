import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import RightBar from "./components/RightBar";

function App() {
  const [data, setData] = useState(0);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // function Show(info) {
  //   // console.log(props);
  //   return (
  //     <div>
  //       <h1>{info.message}</h1>
  //       <h2>{info.linkk}</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Header />
      <div className="mid-sec">
        {/* {Show(data)} */}
        <Post info={data}></Post>
        <RightBar></RightBar>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

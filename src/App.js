import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Pvp from "./Pvp";
import Solo from "./Solo";
import Duo from "./Duo";
import Five from "./Five";
import All from "./All";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div>RLO</div>
      <ul>
        <li className="button">
          <Link to="/pvp">1:1</Link>
        </li>
        <li className="button">
          <Link to="/solo">솔랭</Link>
        </li>
        <li className="button">
          <Link to="/duo">듀오</Link>
        </li>
        <li className="button">
          <Link to="/five">5인</Link>
        </li>
        <li className="button">
          <Link to="/all">올랜덤</Link>
        </li>
      </ul>
      <Route path="/pvp" component={Pvp} exact={true}></Route>
      <Route path="/solo" component={Solo} exact={true}></Route>
      <Route path="/duo" component={Duo} exact={true}></Route>
      <Route path="/five" component={Five} exact={true}></Route>
      <Route path="/all" component={All} exact={true}></Route>
      {/* </header> */}
    </div>
  );
}

export default App;

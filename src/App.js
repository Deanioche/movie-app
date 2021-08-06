import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"; // {About as Potato}로 별명을 지어줄 수 있다.
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Nav from "./components/Navigation"
import "./App.css";

function App() { // url "/about"에 접속하면 About.js로 보냄
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>)
} // exact={true}는 정확히 이 url이 아니면 렌더링 안한다는 뜻
// Link를 사용하는 Component는 반드시 <Router>안에 존재해야 한다.
// HashRouter 대신 BrowserRouter를 import해서 쓰면 url에 #/ 이런게 안생긴다.
// BrowserRouter보다는 HashRouter가 github-page에 사용하기 편하다

export default App;
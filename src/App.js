// import {Route, Switch, useHistory} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
// import { useState, useEffect} from 'react'
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Missing } from "./components/Missing";
import { Nav } from "./components/Nav";
import { NewPost } from "./components/NewPosr";
import { PostPage } from "./components/PostPage";
import "./App.scss";

function App() {
  return (
  <div className="App">
    <Header title="React JS Blog" />
    <Nav />
    <Switch>
      <Route exact path="/" ><Home /></Route>
      <Route exact path="/post"><NewPost /></Route>
      <Route path="/post/:id"><PostPage /></Route>
      <Route path="/about" component={About} />
      <Route path="*" component={Missing} />
    </Switch>
    <Footer />
    </div>
  )
}

export default App;
//! 4:56:40

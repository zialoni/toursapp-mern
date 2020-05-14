import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UploadProduct from "./components/UploadProduct/UploadProduct";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/tour/:tourId" component={About} />

        <Route path="/upload" component={UploadProduct} />
      </Switch>
    </div>
  );
}
export default App;

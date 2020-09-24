import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

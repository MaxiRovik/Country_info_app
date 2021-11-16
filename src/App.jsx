import React from "react";
import './App.css';


import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Controls} from "./components/searchAndSelect/Controls";

function App() {
  return (
      <>
         <Header/>
          <Main>
              <Controls/>
          </Main>
      </>
  );
}

export default App;

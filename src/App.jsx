import React, {useState} from "react";
import './App.css';


import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";



function App() {
    const [countries, setCountries ] = useState([]);
    return (
      <>
         <Header/>
          <Main>
            <Routes>
                <Route exact path = "/" element = {<HomePage countries = {countries} setCountries = {setCountries}/>}/>
                <Route path = "/country/:name" element = {<Details/>}/>
                <Route path = "*" element = {<NotFound/>}/>
            </Routes>
          </Main>
      </>
  );
}

export default App;

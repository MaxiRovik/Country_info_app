import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Controls} from "./components/searchAndSelect/Controls";
import {ALL_COUNTRIES} from "./URL/config";
import {CountryList} from "./components/countryList/CountryList";
import {Card} from "./components/card/Card";


function App() {
    const [countries, setCountries ] = useState([]);

    console.log(countries)
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
    },[])

  return (
      <>
         <Header/>
          <Main>
              <Controls/>
              <CountryList>
                  {
                      countries.map(country =>
                          <Card key = {country.name.common} country = {country}/>
                      )
                  }
              </CountryList>
          </Main>
      </>
  );
}

export default App;

import React, {useEffect} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ALL_COUNTRIES} from "../URL/config";
import {Controls} from "../components/searchAndSelect/Controls";
import {CountryList} from "../components/countryList/CountryList";
import {Card} from "../components/card/Card";

const HomePage = (countries, setCountries) => {
    // const [countries, setCountries ] = useState([]);
    let navigate = useNavigate();
    console.log(countries)
    useEffect(() => {
        if (!countries.length)
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
    },[])
    return (
        <>
        <Controls/>
        <CountryList>
            {
                countries.map(country =>
                    <Card key = {country.name.common}  onClick={() => navigate(`/country/${country.name.common}`)} country = {country}/>
                )
            }
        </CountryList>
        </>
    );
};

export default HomePage;
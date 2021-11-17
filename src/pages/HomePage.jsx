import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ALL_COUNTRIES} from "../URL/config";
import {Controls} from "../components/searchAndSelect/Controls";
import {CountryList} from "../components/countryList/CountryList";
import {Card} from "../components/card/Card";

const HomePage = ({countries, setCountries}) => {
    console.log('я компонента')

    const [filteredCountries, setFilteredCountries ] = useState(countries);

    useEffect(() => {
        console.log('эффект по установке в setFilteredCountries значение countries')
        setFilteredCountries(countries)
    },[countries])

    let navigate = useNavigate();
console.log('countries', countries)
    console.log('filteredCountries', filteredCountries)

    const handleSearch = (searchQuery, region) => {

        let data = [...countries];
        if(region) {
            data = data.filter(country => country.region.includes(region))
        }
        if (searchQuery) {
            data = data.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        setFilteredCountries(data)
    }

    useEffect(() => {
        console.log('идем за странами запускаем запрос')
        if (!countries.length)
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));

    },[])

    return (
        <>
        <Controls onSearch = {handleSearch}/>
        <CountryList>
            {
                filteredCountries.map(country =>
                    <Card key = {country.name.common}  onClick={() => navigate(`/country/${country.name.common}`)} country = {country}/>
                )
            }
        </CountryList>
        </>
    );
};

export default HomePage;
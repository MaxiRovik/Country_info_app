import Search from "./search/Search";
import {useState, useEffect} from "react";
import {CustomSelect} from "./select/CustomSelect";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

export const Controls = () => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <Search query = {search} setQuery = {setSearch}/>
            <CustomSelect options = {options}/>
        </div>
    )
}
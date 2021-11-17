import Search from "./search/Search";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {CustomSelect} from "./select/CustomSelect";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        onSearch(search,region)
    }, [search,region])

    return (
        <Wrapper>
            <Search query = {search} setQuery = {setSearch}/>
            <CustomSelect options = {options}
                          placeholder = "Filter by Region"
                          isClearable
                          isSearchable = {false}
                          value = {region}
                          onChange = {(e) => setRegion(e.value)}
            />
        </Wrapper>
    )
}
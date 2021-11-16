import {IoSearch} from 'react-icons/io5';
import {Input} from "./Input";
import {InputContainer} from "./InputContainer";

const Search = ({query, setQuery }) => {
    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange = {(e) => setQuery(e.target.value)} value = {query}/>
        </InputContainer>
    );
};

export default Search;
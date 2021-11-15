import React,{useState, useEffect} from 'react';


import { IoMoon, IoMoonOutline } from "react-icons/io5";
import {HeaderEl} from "./HeaderEl";
import {Container} from "./Container"
import {Wrapper} from "./Wrapper";
import {Title} from "./Title";
import {Switcher} from "./Switcher";


const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(()=> {
        document.body.setAttribute('data-theme', theme)
    },[theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title> Where is the world?</Title>
                    <Switcher onClick = {toggleTheme} >
                        {theme === 'light' ? (
                            <IoMoonOutline size = "14px"/>
                        ):(
                            <IoMoon size = "14px"/>
                        )}
                        <span style = {{marginLeft: '1rem'}}>{theme} theme</span>
                    </Switcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;
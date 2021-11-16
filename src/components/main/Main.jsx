import React from 'react';
import {MainWrapper} from "./MainWrapper";
import {Container} from "./Container";


const Main = ({children}) => {
    return (
        <MainWrapper>
            <Container>
                {children}
            </Container>
        </MainWrapper>
    );
};

export default Main;
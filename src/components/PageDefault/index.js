import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from "styled-components";

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top:50px;
    padding-top:5%;
    padding-top:5%;
`;

/*CHILDREN É O CONTEUDO QUE ESTA NA PÁGINA DENTRO DO TITULO E RODAPÉ*/
function PageDefault({children}){
    return(
        <>
            <Menu/ >
                <Main>
                    {children} 
                </Main>
            <Footer/ >
        </>
    );
}

export default PageDefault;
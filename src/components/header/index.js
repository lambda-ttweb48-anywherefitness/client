import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
    height:75px;
    background-color:#522D80;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Title = styled.h1`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 49px;
    letter-spacing: 3.69231px;
`
const Navigation = styled.div`
    display:flex;
`
export default function Header( props ){


  return(
    <Main>
        <Title>AnywhereFitness</Title>
        <Navigation>
            <Link to="/" className="header-link">Login</Link>
        </Navigation>
    </Main>
  );
}
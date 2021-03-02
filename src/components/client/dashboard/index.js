import React from 'react';
import styled from 'styled-components';

import EventList from './EventList';

const Heading = styled.div`
    border-bottom:1px solid #522D80;
    padding:20px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`
const Greeting = styled.h2`
    font-weight:600;
    color:#434343;
    letter-spacing:3.69231;
    opacity: 0.6;
    font-size:1.8rem;
`

const ClassButton = styled.button`
    background-color:#522D80;
    border:none;
    color:#FFFFFF;
    font-size:1rem;
    font-weight:600;
    letter-spacing: 0.9375px;
    padding:15px 75px 15px 75px;
    border-radius:10px;
    box-sizing:border-box;

    &:hover{
        background-color:#7b55a9;
    }
    &:active{
        outline:none;
        background:#694991;
    }
    &:focus{
        outline:none;
    }
`
const Container = styled.div`
    margin-top:3%;
`
export default function ClientDashboard( props ){


  return(
    <div>
        <Heading>
            <Greeting>Hello Terry</Greeting>
            <div>
                <ClassButton>Join A Class</ClassButton>
            </div>
        </Heading>

        <Container>
            <EventList />
        </Container>
    </div>
  );
}
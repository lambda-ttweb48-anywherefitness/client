import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../../../utils/UserContext';

import EventList from './EventList';

export default function ClientDashboard( props ){
    const { user } = useContext( UserContext );
    const history = useHistory();

  return(
    <div>
        <Heading>
        {console.log("USER: ", user)}

            <Greeting>Hello { user.name }</Greeting>
            <div>
                <ClassButton onClick={ () => {history.push('/search') }}>Join A Class</ClassButton>
            </div>
        </Heading>

        <Container>
            <EventList />
        </Container>
    </div>
  );
}






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
    margin-bottom:5%;
`
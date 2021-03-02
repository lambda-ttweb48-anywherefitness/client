import React from 'react';

import styled from 'styled-components';

import Event from './Event';



const ContentBox = styled.div`
    margin-bottom:5%;
`

const Title = styled.h2`
    font-size:1.5rem;
    text-transform:uppercase;
    font-weight:600;
    letter-spacing:3.69231;
    color:#434343;
    opacity:0.4;
    margin-left:15px;
    margin-bottom:20px;
`

const Content = styled.div`
    background-color:#F2EFF5;
    min-height:100px;
    border:1px solid #B8B8B8;
    border-radius:10px;
    padding:30px 100px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`



export default function EventList( props ){
    
    const details = {
        type: 'Yoga Session',
        coach: 'Coach Neil',
        location: 'Central park',
        date:'Fri, Feb 26 @ 5:45 pm',
    }

  return(
    <ContentBox>
        <Title>Upcoming Events</Title>
        <Content>
            <Event details={details}/>
            <Event details={details}/>
        </Content>
    </ContentBox>
  );
}
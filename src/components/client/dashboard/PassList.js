import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';

import styled from 'styled-components';

import Pass from './Pass';

export default function Passlist( props ){


  return(
    <ContentBox>
        <Title>PUNCH PASS</Title>
        <Content>
            <Pass details={{name: 'Coach Neil', amount:'5 / 10'}}/>
            <Pass details={{name: 'Bob', amount:'3 / 5'}}/>
            <Pass details={{name: 'Susan', amount:'1 / 12'}}/>
        </Content>
    </ContentBox>
  );
}




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
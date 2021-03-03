import React from 'react';

import styled from 'styled-components';

import userIcon from '../../../assets/images/icons/user.png'

export default function Pass( { details } ){

  return(
    <PassCard>
        <Coach>
            <img src={userIcon} alt={userIcon}/>
            <h2>{details.name}</h2>
        </Coach>
        <PassQty>{details.amount}</PassQty>
    </PassCard>
  );
}


const Coach = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;

    & > h2{
        font-size:1.3rem;
    }

    & > img {
        width:15px;
        margin-right:10px;
    }

`

const PassQty = styled.div`
    color:#FFFFFF;
    background:#522D80;
    border-radius:10px;
    padding:15px 30px;
    box-sizing:border-box;
    font-size:0.9rem;
    font-weight:500;
`


const PassCard = styled.div`
    background: #FFFFFF;
    border:1px solid #B8B8B8;
    box-sizing:border-box;
    border-radius:10px;
    padding:20px;
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
    font-weight:600;
    font-size:1.1rem;
    color:rgba(0,0,0,0.4);

    &:last-child{
        margin-bottom:0;
    }
`
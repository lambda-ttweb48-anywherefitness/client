import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import editIcon from '../../../assets/images/icons/edit.png'
import pinIcon from '../../../assets/images/icons/pin.png'
import userIcon from '../../../assets/images/icons/user.png'

/**
 * CUSTOM IMPORTS
 */

const ClassCard = styled.div`
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

const ClassInfo = styled.div`
 & > ul > li{
     margin-bottom:20px;
 }
 & > ul > li:last-child{
    margin-bottom:0;
 }
 & > ul > li > span {
     margin-right:5px;
 }
 & > ul > li > span > img{
     width:20px;
 }
 & > ul > li{
     display:flex;
     align-items:center;
 }

`
const ClassTime = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-between;
`

export default function Event( { details } ){

  return(
    <ClassCard>
        <ClassInfo>
            <ul>
                <li><span><img src={editIcon}/></span>{ details.type }</li>
                <li><span><img src={userIcon}/></span>{ details.coach }</li>
                <li><span><img src={pinIcon}/></span>{ details.location }</li>
            </ul>
        </ClassInfo>
        <ClassTime>
            <h2>{ details.date }</h2>
            <div className="card-links">
                <Link to="/">Cancel Reservation</Link>
            </div>
        </ClassTime>
    </ClassCard>
  );
}
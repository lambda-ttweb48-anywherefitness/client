import React from 'react';

import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { capitalizeString } from '../../../utils';
import FormatDate from '../../../utils/FormatDate';


import styled from 'styled-components';

/**
 * CUSTOM IMPORTS
 */
import editIcon from '../../../assets/images/icons/edit.png'
import pinIcon from '../../../assets/images/icons/pin.png'
import userIcon from '../../../assets/images/icons/user.png'
import timeIcon from '../../../assets/images/icons/clock.png'
import activityIcon from '../../../assets/images/icons/activity.png'



export default function SearchItem( { details } ){

    const history = useHistory();

    const joinClass = ( e ) => {
        e.preventDefault();
        const obj = {
            class_id: details.id,
            pass_id: 1
        }
        axiosWithAuth().post(`https://anywherefitness-server.herokuapp.com/api/reservations`, obj)
            .then( res => {
                history.push('/dashboard');
            })
            .catch( err => console.log( err ) );
    }


  return(
    <SearchCard>
        <MainCard>
            <SearchInfo>
                <ul>
                    <li><span><img src={editIcon} alt={editIcon}/></span>{ capitalizeString(details.name) }</li>
                    <li><span><img src={userIcon} alt={userIcon}/></span>{ capitalizeString(details.instructor) }</li>
                    <li><span><img src={pinIcon} alt={pinIcon}/></span>{ capitalizeString(details.location) }</li>
                    <li><span><img src={timeIcon} alt={timeIcon}/></span>{ details.duration } Minutes</li>
                    <li><span><img src={activityIcon} alt={activityIcon}/></span>{ capitalizeString(details.intensity) }</li>
                </ul>
            </SearchInfo>
            <SearchTime>
                <h2>{ FormatDate(details.start) }</h2>
            </SearchTime>
        </MainCard>
        <CtaBtns>
            <JoinBtn onClick={ joinClass }>JOIN CLASS</JoinBtn>
        </CtaBtns>
    </SearchCard>
  );
}


const CtaBtns = styled.div`
    border-top:1px solid #522D80;
    margin-top:20px;
    padding-top:20px;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
`
const JoinBtn = styled.button`
    background:white;
    border:none;
    color: #522D80;
    font-weight:600;
    font-size:1rem;

    :active{
        border:none;
        outline:none;
    }
    :focus{
        border:none;
        outline:none;
    }
    :hover{
        opacity:0.6;
    }

`
const MainCard = styled.div`
    display:flex;
    justify-content:space-between;
`
const SearchCard = styled.div`
    background: #FFFFFF;
    border:1px solid #B8B8B8;
    box-sizing:border-box;
    border-radius:10px;
    padding:20px;
    margin-bottom:30px;
    font-weight:600;
    font-size:1.1rem;
    color:rgba(0,0,0,0.4);

    &:last-child{
        margin-bottom:0;
    }
`

const SearchInfo = styled.div`
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
const SearchTime = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-between;
`
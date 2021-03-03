import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {axiosWithAuth} from '../../../utils/axiosWithAuth';
import { capitalizeString } from '../../../utils';
import FormatDate from '../../../utils/FormatDate';

import styled from 'styled-components';

/**
 * CUSTOM IMPORTS
 */
import editIcon from '../../../assets/images/icons/edit.png'
import pinIcon from '../../../assets/images/icons/pin.png'
import userIcon from '../../../assets/images/icons/user.png'


export default function Event( { details } ){

    const history = useHistory();

    const cancelReservation = ( id ) =>{
        axiosWithAuth().delete(`https://anywherefitness-server.herokuapp.com/api/reservations/${id}`)
            .then( res => {
                history.push('/dashboard');
                window.location.reload();
            })
            .catch( err => console.log( err ) );
    }


  return(
    <ClassCard>
        <ClassInfo>
            <ul>
                <li><span><img src={editIcon} alt={editIcon}/></span>{ capitalizeString(details.class_name) }</li>
                <li><span><img src={userIcon} alt={userIcon}/></span>{ capitalizeString(details.instructor) }</li>
                <li><span><img src={pinIcon} alt={pinIcon}/></span>{ capitalizeString(details.class_location) }</li>
            </ul>
        </ClassInfo>
        <ClassTime>
            <h2>{ FormatDate(details.class_start) }</h2>
            <div className="card-links">
                <Link to='/dashboard' onClick={ () => cancelReservation(details.reservation_id) }>Cancel Reservation</Link>
            </div>
        </ClassTime>
    </ClassCard>
  );
}




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
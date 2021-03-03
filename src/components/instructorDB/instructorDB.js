import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import editIcon from '../../assets/images/icons/edit-3.png'
import clockIcon from '../../assets/images/icons/clock.png'
import activityIcon from  '../../assets/images/icons/activity.png'
import locIcon from '../../assets/images/icons/map-pin.png'
import { UserContext } from "../../utils/UserContext.js";


import { axiosWithAuth } from "../../utils/axiosWithAuth.js";



const StyledContainer = styled.div`
position: absolute;
width: 1855px;
height: 1800px;
left: 0px;
top: 0px;


background: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.8;
`
const StyledEvents = styled.h3`
    position: absolute;
width: 478px;
height: 34px;
left: 132px;
top: 420px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
text-align: center;
letter-spacing: 3.69231px;

color: #434343;

opacity: 0.4; 

`

const StyledInfo = styled.div`

`
const StyledName=styled.h2`
    position: absolute;
width: 533px;
height: 56px;
left: 28px;
top: 240px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 61px;
text-align: center;
letter-spacing: 3.69231px;

color: #434343;

opacity: 0.6; 
`
const StyledButton1 = styled.button`
    position: absolute;
width: 389px;
height: 78px;
left: 908px;
top: 254px;

background: #522D80;
border: 1px solid #B8B8B8;
box-sizing: border-box;
border-radius: 10px;
color: #FFFFFF;



`
const StyledButton2 = styled.button`
position: absolute;
width: 389px;
height: 78px;
left: 1328px;
top: 254px;

background: #522D80;
border: 1px solid #B8B8B8;
box-sizing: border-box;
border-radius: 10px;
color: #FFFFFF;
`
const StyledClasses  = styled.div`
position: absolute;
width: 1650px;

left: 103px;
top: 507px;

background: rgba(82, 45, 128, 0.08);
border: 1px solid #B8B8B8;
box-sizing: border-box;
border-radius: 10px;
`
const StyledLine = styled.hr`
position: absolute;
width: 1602.04px;
height: 0px;
left: 117.98px;
top: 360px;


border: 1px solid #522D80;
`

const StyledClassCard = styled.div`
/* position: absolute; */
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

export default function IDashboard( props ){
    const [classes, setClasses] = useState([]);
    const {user} = useContext(UserContext);
    const history = useHistory()
    const handleClick1 = () => history.push('/CreatClass')
    const handleClick2 = () => history.push('/CreatePassCard')

    useEffect( ()  => {
        axiosWithAuth()
            .get("https://anywherefitness-server.herokuapp.com/dash/classes" )
            .then((res) => {
                setClasses(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.res);
            });
        
    }, [])

    
    return (
        <StyledContainer>

            <StyledInfo>
                <StyledName>Hello {user.name}</StyledName>
                <StyledButton1 id="createPasscard" onClick={handleClick2}>Create Passcard</StyledButton1>
                <StyledButton2 id="createClass" onClick={handleClick1}>Create Class</StyledButton2>
                <StyledLine></StyledLine>
            </StyledInfo>
            <StyledEvents>UPCOMING EVENTS</StyledEvents>
            <StyledClasses className="classes">
                {
                    classes.map( item => {
                    
                        return (
                            <StyledClassCard> 
                                <ClassInfo>
                                <ul>
                                    <li><span><img src={editIcon}/></span>{ item.name } </li>
                                    <li><span></span>{item.type} </li>
                                    <li><span></span>{item.start}</li>
                                    <li><span><img src={clockIcon}/></span>{item.duration}</li>
                                    <li><span><img src={activityIcon}/></span>{item.intensity}</li>
                                    <li><span><img src={locIcon}/></span>{item.location}</li>
                                    <li><span>edit</span></li>
                                </ul>
                                </ClassInfo>

                            </StyledClassCard> )
                    })
                }

                    
            </StyledClasses>

            
        </StyledContainer>
    );
}
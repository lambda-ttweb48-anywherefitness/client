import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import styled from 'styled-components';


export default function PassCards(props){
    
    const [passcard, setPass ] = useState([]);
    
    useEffect(() => {
        axiosWithAuth().get('https://anywherefitness-server.herokuapp.com/dash/class_passes')
        .then( res => {
            setPass(res.data)
            console.log(res.data)
        })
    }, [])

    return(
        <StyledH3>Pass Cards
        <PassCardContainer>
            
        {
            passcard.map( item => {
            
                return( 
                    
                        <StyledPassCard>
                            <PassInfo>
                                <ul>
                                    <li>Total Class: {item.total_classes}</li>
                                    <li>Price: {item.price}</li>
                                </ul>
                            </PassInfo>
                        </StyledPassCard>

                    
                    
                    
                )
                
            })
        }
        </PassCardContainer>
        </StyledH3>
        
        
    )
}

const PassInfo = styled.div `
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
const StyledPassCard = styled.div `
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
const PassCardContainer = styled.div `
width: 1650px;

left: 103px;
top: 507px;

background: rgba(82, 45, 128, 0.08);
border: 1px solid #B8B8B8;
box-sizing: border-box;
border-radius: 10px;
`




`

const StyledH3 = styled.h3 `
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
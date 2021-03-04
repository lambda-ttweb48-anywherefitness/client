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
        <ContentBox>
            <Title>Pass Cards</Title>
            <Content>            
                {
                    passcard.map( item => {
                    
                        return( 
                            
                                <ClassCard>
                                    <ClassInfo>
                                        <ul>
                                            <li>Total Class: {item.total_classes}</li>
                                            <li>Price: {item.price}</li>
                                        </ul>
                                    </ClassInfo>
                                </ClassCard>
                        )
                        
                    })
                }
            </Content>
        </ContentBox>
        
        
    )
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
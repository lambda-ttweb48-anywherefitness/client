import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';

import styled from 'styled-components';

import Event from './Event';





export default function EventList( props ){

    const [ classes, setClasses ] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`https://anywherefitness-server.herokuapp.com/dash/reservations`)
            .then(res =>{
                res.data.forEach( item => {
                    axiosWithAuth().get(`https://anywherefitness-server.herokuapp.com/api/classes/${item.class_id}`)
                        .then( result => {
                            setClasses([
                                ...classes,
                                result.data
                            ])
                        })
                        .catch( err => console.log( err ) );
                })

            })
            .catch( err => console.log( err ) );

            getPasses();
    }, [] )

    const getPasses = () => {
        axiosWithAuth().get(`https://anywherefitness-server.herokuapp.com/dash/client_passes`)
            .then( res => {
                console.log("PASSES: ", res.data );
            })
    }

  return(
    <ContentBox>
        {console.log("CLASSES ", classes)}
        <Title>Upcoming Events</Title>
        <Content>
            {
                classes.map( item => {
                    return <Event details={item} key={ item.id }/>
                })
            }
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
import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../../../utils/UserContext';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';


import SearchItem from './SearchItem';


export default function Search( props ){

    const { user } = useContext( UserContext );

    const history = useHistory();

    const [ results, setResults ] = useState([]);

    useEffect( () => {
        axiosWithAuth().get(`https://anywherefitness-server.herokuapp.com/api/classes?start=all`)
            .then( res => {
                setResults( res.data );
            })
    }, [])


  return(
    <div>
        <Heading>
            <Greeting>Hello { user.name }</Greeting>
        </Heading>

        <Container>
            <Title><Link to='' onClick={ () => history.goBack() }>{'<'}</Link> Upcoming Events</Title>
            <SearchList>
                {
                    results.map( item =>{
                        return <SearchItem details={ item } key={item.id}/>
                    })
                }
            </SearchList>

        </Container>
    </div>
  );
}

const SearchList = styled.div`
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


const Heading = styled.div`
    border-bottom:1px solid #522D80;
    padding:20px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`
const Greeting = styled.h2`
    font-weight:600;
    color:#434343;
    letter-spacing:3.69231;
    opacity: 0.6;
    font-size:1.8rem;
`
const Container = styled.div`
    margin-top:3%;
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

    & > a{
        text-decoration:none;
    }
    & > a:hover{
        opacity:0.7;
    }
`

import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import PassCards from './PassCards'


import editIcon from '../../assets/images/icons/edit.png'
import clockIcon from '../../assets/images/icons/clock.png'
import activityIcon from  '../../assets/images/icons/activity.png'
import locIcon from '../../assets/images/icons/pin.png'

import { UserContext } from "../../utils/UserContext.js";


import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import FormatDate from '../../utils/FormatDate';
import { capitalizeString } from '../../utils/'


export default function IDashboard( props ){
    const [classes, setClasses] = useState([]);
    const {user} = useContext(UserContext);
    const history = useHistory()

    const handleClick1 = () => history.push('/createclass')
    const handleClick2 = () => history.push('/createpass')


    useEffect( ()  => {
        axiosWithAuth()
            .get("https://anywherefitness-server.herokuapp.com/dash/classes" )
            .then((res) => {
                setClasses(res.data);
            })
            .catch((err) => {
                console.log(err.res);
            });
        
    }, [])

    
    return (
        <div>
            <Heading>
                <Greeting>Hello { user.name }</Greeting>
                <div>
                    <ClassButton onClick={handleClick2}>Create Passcard</ClassButton>
                    <ClassButton onClick={handleClick1}>Create Class</ClassButton>
                </div>
            </Heading>

            <Container>
                <ContentBox>
                    <Title>Upcoming Events</Title>
                    <Content>
                        {
                        classes.map( item => {
                        
                            return (
                                <SearchCard>
                                    <MainCard>
                                        <SearchInfo>
                                        <ul>
                                            <li><span><img src={editIcon} alt={editIcon}/></span>{ capitalizeString(item.name) }</li>
                                            <li><span><img src={editIcon} alt={editIcon}/></span>{ capitalizeString(item.type) } </li>
                                            <li><span><img src={locIcon} alt={locIcon}/></span>{ capitalizeString(item.location) }</li>
                                            <li><span><img src={clockIcon} alt={clockIcon}/></span>{ item.duration } Minutes</li>
                                            <li><span><img src={activityIcon} alt={activityIcon}/></span>{ capitalizeString(item.intensity) }</li>
                                        </ul>
                                        </SearchInfo>
                                        <SearchTime>
                                            <h2>{ FormatDate(item.start) }</h2>
                                        </SearchTime>
                                    </MainCard>

                                    <CtaBtns>
                                        <JoinBtn>Edit</JoinBtn>
                                    </CtaBtns>
                                </SearchCard>
                                    )
                        })
                        }
                    </Content>
                </ContentBox>

                <PassCards />
            </Container>
        </div>
    );
}


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

const ClassButton = styled.button`
    background-color:#522D80;
    border:none;
    color:#FFFFFF;
    font-size:1rem;
    font-weight:600;
    letter-spacing: 0.9375px;
    padding:15px 75px 15px 75px;
    border-radius:10px;
    box-sizing:border-box;
    margin-left:20px;

    :first-child{
        margin-left:0;
    }

    &:hover{
        opacity:0.7;
    }
    &:active{
        outline:none;
        background:#694991;
    }
    &:focus{
        outline:none;
    }
`
const Container = styled.div`
    margin-top:3%;
    margin-bottom:5%;
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
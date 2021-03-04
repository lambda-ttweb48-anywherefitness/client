import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import backdrop from "../../assets/images/backdrop/pic03.jpg"

export default function Home(){
    return(
        <HomeBackground>
 
        <DivContainer>
          <H1style>Welcome Back!</H1style>
           <Link to="/login">
                <ButtonStyle>Log in</ButtonStyle>
           </Link>
        </DivContainer>
        
          <DivContainer>
          <H1style>Get Started!</H1style>
           <Link to="/register">
                <ButtonStyle>Register</ButtonStyle>
           </Link>
          </DivContainer>
        </HomeBackground>
    )
}

const HomeBackground = styled.div`

    background: linear-gradient(0deg, rgba(103,92,100,0.5) 0%, rgba(255,255,255,0.7) 100%);
    padding-top: 2.5%;
    width: 100%;
    height: 100vh;

`

const DivContainer = styled.div`
    display:flex;
    background-color: rgba(82, 45, 128, 0.08);
    width: 30%;
    border-radius: 8px;
    margin: auto;
    margin-bottom: 2.5%;
    padding: 2rem;
    border: 1px solid rgba(82, 45, 128, 0.6);
    flex-direction: column;
`

const H1style = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 54px;
    text-align: center;
    letter-spacing: 3.69231px;
    color: #434343;
    opacity: 0.4;
`

const ButtonStyle = styled.button`
    background-color:#522D80;
    width:100%;
    margin-top: 1rem;
    border:none;
    color:#FFFFFF;
    font-size:1rem;
    font-weight:600;
    letter-spacing: 0.9375px;
    padding:15px 75px 15px 75px;
    border-radius:10px;
    box-sizing:border-box;

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
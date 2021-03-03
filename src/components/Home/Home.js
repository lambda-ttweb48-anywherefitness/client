import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Home(){
    return(
        <div>
        <ButtonStyle>
           <Link to="/login">
               <button>Log in</button>
           </Link>
           <Link to="/register">
               <button>Register</button>
           </Link>
        </ButtonStyle>
        </div>
    )
}

const ButtonStyle = styled.button`
    button {
        width: 100%;
        height: 2.75rem;
        border-radius: 4px;
        outline: none;
        margin: auto;
        text-transform: uppercase;
        background-color: #522d80;
        color: white;
        font-size: 1rem;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
        display: block;
        margin-top: 1rem;
    }
    button:hover {
        width: 100%;
        height: 2.75rem;
        border-radius: 4px;
        outline: none;
        margin: auto;
        text-transform: uppercase;
        background-color: #522d80;
        color: black;
        font-size: 1rem;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
        display: block;
        margin-top: 1rem;
    }
`
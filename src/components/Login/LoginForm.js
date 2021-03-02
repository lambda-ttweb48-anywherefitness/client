import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm(props) {
    const { disabled, values, change, submit, errors } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const useValue = type === "checkbox" ? checked : value;
        change(name, useValue);
    };

    return (
        <div>
            <H1style>Create Account</H1style>
            <FormDiv>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>
                            <h2>Email:</h2>
                            <input
                                type="text"
                                name="email"
                                onChange={onChange}
                                value={values.email}
                                placeholder="Please enter your email"
                            />
                        </label>
                        <p>{errors.email}</p>
                    </div>
                    <div>
                        <label>
                            <h2>Password:</h2>
                            <input
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={values.password}
                                placeholder="Please enter your password"
                            />
                        </label>
                        <p>{errors.password}</p>
                    </div>
                    <div></div>
                    <button type="submit" disabled={disabled}>
                        Login
                    </button>
                </form>
                <Link to="/register">
                    <button>Don't have an account? Create one here!</button>
                </Link>
            </FormDiv>
        </div>
    );
}

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
`;

const FormDiv = styled.div`
    background-color: rgba(82, 45, 128, 0.08);
    width: 30%;
    border-radius: 8px;
    margin: auto;
    padding: 2rem;
    border: 1px solid rgba(82, 45, 128, 0.6);

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
    }

    h2 {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
        font-family: "Montserrat", sans-serif;
    }
    p {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
        font-family: "Montserrat", sans-serif;
        color: red;
    }
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

    button:disabled {
        width: 100%;
        height: 2.75rem;
        border-radius: 4px;
        outline: none;
        margin: auto;
        text-transform: uppercase;
        background-color: #6b6670;
        color: grey;
        font-size: 1rem;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
        display: block;
        margin-top: 1rem;
    } 
`;

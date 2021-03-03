import React from "react";
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
                            <h2>First name:</h2>
                            <input
                                className="name"
                                type="text"
                                name="name"
                                onChange={onChange}
                                value={values.name}
                                placeholder="Please enter your first name"
                            />
                        </label>
                        <p>{errors.name}</p>
                    </div>
                    <div>
                        <label>
                            <h2>Email:</h2>
                            <input
                                className="email"
                                type="email"
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
                                className="password"
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={values.password}
                                placeholder="Please enter your password"
                            />
                        </label>
                        <p>{errors.password}</p>
                    </div>
                    <Idiv>
                        <h4>Are you an instructor?</h4>
                        <label>
                            <input
                                className="instructor"
                                onChange={onChange}
                                value={values.instructor}
                                name="instructor"
                                type="checkbox"></input>
                        </label>
                    </Idiv>
                    <div>
                        <ButtonStyle type="submit" disabled={disabled}>
                            Create Account
                        </ButtonStyle>
                    </div>
                </form>
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

const ButtonStyle = styled.button`
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

    :hover {
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

    :disabled {
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

const FormDiv = styled.div`
    background-color: rgba(82, 45, 128, 0.08);
    width: 30%;
    border-radius: 8px;
    margin: auto;
    padding: 2rem;
    border: 1px solid rgba(82, 45, 128, 0.6);

    /* input {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
    } */

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

    h4 {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
        font-family: "Montserrat", sans-serif;
        text-align: center;
    }

    .name {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
    }

    .email {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
    }

    .password {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
    }
`;

const Idiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 3rem;
        height: 3rem;
        border-radius: 4px;
        padding-left: 10rem;

        border: 0.5px solid rgba(82, 45, 128, 0.5);
        font-family: "Montserrat", sans-serif;
    }

    h4 {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        padding-right: 2rem;
    }
`;

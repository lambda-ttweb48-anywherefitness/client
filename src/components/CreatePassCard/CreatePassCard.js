import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import * as Yup from 'yup';
import Schema from './createPassCardSchema';


function CreatePassCard() {
    const [ formValues, setFormValues ] = useState({
        total_classes: '',
        price: '',
    })

    const [ errors, setErrors ] = useState({
        total_classes: null,
        price: null,
    })

    const history = useHistory();

    const onChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const updateErrors = () => {
        Object.keys(formValues).map(key => {
            const value = formValues[key]
            Yup.reach(Schema, key)
            .validate(value)
            .then(() => {
                setErrors({
                    ...errors,
                    [key]: '',
                })
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [key]: err.errors[0]
                })
            })
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateErrors()
        Schema.isValid(formValues).then((valid) => {
            if (valid) {
                axiosWithAuth()
                .post('https://anywherefitness-server.herokuapp.com/api/class_passes', formValues)
                .then(res => {
                    history.push('/dashboard');
                })
                .catch(err => {
                    console.log(err)
                }) 
            }
        })
    }


    return (
        <CreatePassForm>
            <Link to='' onClick={ () => history.goBack() }>{'<Back'}</Link>
            <form onSubmit={onSubmit}>
                <h3 className='explainText'>
                    Allow clients to join your <br></br>workouts at their convenience
                </h3>
                <div className='spread'>.</div>
                <div>
                    <label>
                        <h3 className='workoutTitle'>NUMBER OF WORKOUTS</h3>
                    </label>
                    <select className='inputValue' name='total_classes' onChange={onChange} type='number'>
                        <option value=''>How many workouts can clients join?</option>
                        <option value='1'>1</option>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>
                    <p className='errorAlert'>{errors.total_classes}</p>
                </div>

                <div>
                    <label>
                        <h3>PRICE</h3>
                        <input 
                            type='number'
                            step='.01'
                            placeholder='Total price?'
                            name='price'
                            className='inputValue'
                            onChange={onChange}
                        />
                    </label>
                    <p className='errorAlert'>{errors.price} </p>
                </div>
                <button className='createPassCardBtn'>create passcard</button>

                
            </form>
        </CreatePassForm>
    )
}

export default CreatePassCard;


const CreatePassForm = styled.div`
    background-color: #EAE1F5;
    width: 60%;
    border-radius: 8px;
    margin: auto;
    padding: 2rem;
    border: 1px solid rgba(82, 45, 128, 0.2);
    margin-top: 14rem;
    font-weight:600;


    h3 {
        opacity: 25%;
        margin-bottom: .75rem;
        margin-top: .75rem;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1px;
    }

    .explainText {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 1.2rem;
        margin-top: -.3rem;
        opacity: 25%;
        letter-spacing: .75px;
        line-height: 1.5;
    }

    .spread {
        background-color: white;
        width: 100%;
        height: .25rem;
        opacity: 40%;
        color: #EAE1F5;
    }

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left:.75rem;
        box-sizing: border-box;
        border: .5px solid rgba(82, 45, 128, 0.5);
        font-family: 'Montserrat', sans-serif;
    }

    select {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: .5rem;
        box-sizing: border-box;
        border: .5px solid rgba(82, 45, 128, 0.5);
        font-family: 'Montserrat', sans-serif;
        margin-bottom: .5rem;
    }

    .workoutTitle {
        margin-top: 1.75rem;
    }

    .createPassCardBtn{
        background-color:#522D80;
        border:none;
        color:#FFFFFF;
        font-size:1rem;
        font-weight:600;
        padding:15px 75px 15px 75px;
        border-radius:10px;
        box-sizing:border-box;
        margin-top:20px;
        text-transform:uppercase;
        width:100%;

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
        &:disabled{
            opacity:0.3;
        }
    }

    .inputValue {
        color: #777;
        font-size: 1rem;
        opacity: 80%;
    }

    .errorAlert {
        color: #777;
        font-size: .8rem;
        opacity: 80%;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        color: rgba(82, 45, 128, 0.5)
    }

    & > a{
        text-decoration:none;
        font-size:1.4rem;
    }
    & > a:hover{
        opacity:0.7;
    }


`

 
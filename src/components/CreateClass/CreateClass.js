import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

import * as Yup from 'yup';
import Schema from './createClassSchema';
import { useHistory } from 'react-router-dom';


function CreateClass() {
    const [ formValues, setFormValues ] = useState({
        name: '',
        type: '',
        start: '',
        duration: '',
        intensity: '',
        location: '',
        max_size: '',
    })
    const [ errors, setErrors ] = useState({
        name: '',
        type: '',
        start: '',
        duration: '',
        intensity: '',
        location: '',
        max_size: '',
    })

    const history = useHistory();

    const onChange = (e) => {
        if (e.target != null) {
            const { name, value } = e.target
            setFormValues({
                ...formValues,
                [name]: value,
            })
        } else {
            setFormValues({
                ...formValues,
                ['start']: e,
            })
        }
    };

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
                setErrors ({
                    ...errors,
                    [key]: err.errors[0],
                })
            })
        } )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateErrors()
        Schema.isValid(formValues).then((valid) => {
            // setButtonDisable(!valid);
            if (valid) {
                axiosWithAuth()
                .post('https://anywherefitness-server.herokuapp.com/api/classes', formValues)
                .then(res => {
                    console.log(res.data)
                    history.push('/');

                    // setUser(res.data.profile);
                    // localStorage.setItem("token", res.data.token);
                    // setFormValues(initialFormValues);
                    // history.push("/dashboard");

                })
                .catch(err => {
                    console.log(err)
                })  
            }
        });
    }

    return <div className="App">
        <div>
            <H1>Create Class</H1>
            <CreateClassForm>
                <form onSubmit={onSubmit}>
                <div>
                    <label>
                        <h3 className='name'>NAME</h3>
                    </label>
                    <input 
                        type='text'
                        placeholder="Some workout name..."
                        name='name'
                        className='inputValue'
                        onChange={onChange}
                    />
                    <p className='errorAlert'>{errors.name}</p>
                </div>
                <div>
                    <label>
                        <h3>TYPE</h3>
                    </label>
                    <select className='inputValue' onChange={onChange} name='type' >
                        <option value=''>Select workout type...</option>
                        <option value='yoga'>Yoga</option>
                        <option value='strength training'>Strength Training</option>
                        <option value='cardio'>Cardio</option>
                        <option value='mobility'>Mobility</option>
                    </select>
                    <p className='errorAlert'>{errors.type}</p> 
                </div>
                <div>
                    <label>
                        <h3>START TIME</h3>
                    </label>
                        <DatePicker
                            selected={formValues.start}
                            // onChange={date => setStartDate(date)}
                            onChange={onChange}
                            autoComplete="off"
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            minDate={new Date()}
                            name='start'
                            className='datePicker'
                            placeholderText='Select start time...'
                        />  
                        <p className='errorAlert'>{errors.start}</p>
                </div>
                <div>
                    <label>
                        <h3>DURATION</h3>
                    </label>
                    <select className='inputValue' onChange={onChange} name='duration'>
                        <option value=''>Select workout length...</option>
                        <option value='15'>15 minutes</option>
                        <option value='30'>30 minutes</option>
                        <option value='45'>45 minutes</option>
                        <option value='60'>1 hour</option>
                        <option value='90'>1 hour 30 minutes</option>
                    </select> 
                    <p className='errorAlert'>{errors.duration}</p>
                </div>
                <div>
                    <label>
                        <h3>INTENSITY LEVEL</h3>
                    </label>
                    <select className='inputValue' onChange={onChange} name='intensity'>
                        <option value=''>Select intensity level</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='intense'>Intense</option>
                        <option value='ludicrous'>Ludicrous</option>
                    </select>
                    <p className='errorAlert'>{errors.intensity}</p> 
                </div>
                <div>
                    <label>
                        <h3>SELECT LOCATION</h3>
                    </label>
                    <select className='inputValue' onChange={onChange} name='location'>
                        <option value=''>Select location</option>
                        <option value='basement'>Basement</option>
                        <option value='park'>Park</option>
                        <option value='beach'>Beach</option>
                        {/* <option value='create new location'>Create new location</option> */}
                    </select>
                    <p className='errorAlert'>{errors.location}</p> 
                </div>
                <div>
                    <label>
                        <h3>MAX CLASS SIZE</h3>
                    </label>
                    <input 
                        type='text'
                        placeholder="How many people can join?"
                        className='inputValue'
                        name='max_size'
                        onChange={onChange}
                    />
                    <p className='errorAlert'>{errors.max_size}</p> 

                </div>
                <button className='createClassBtn'>create class</button>
                </form>
            </CreateClassForm>
        </div>
        
    </div>;
}

export default CreateClass;

const H1 = styled.h1`
    width: 45%;
    margin: auto;
    text-align: center;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    text-transform: uppercase;
    opacity: 40%;
    font-family: 'Montserrat', sans-serif;

`

const CreateClassForm = styled.div`
    background-color: rgba(82, 45, 128, 0.08);
    width: 45%;
    border-radius: 8px;
    margin: auto;
    padding: 2rem;
    border: 1px solid rgba(82, 45, 128, 0.6);

    h3 {
        opacity: 40%;
        margin-bottom: .75rem;
        font-size: 1.15rem;
        font-family: 'Montserrat', sans-serif;
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
    }


    .createClassBtn{
        width: 100%;
        height: 2.75rem;
        border-radius: 4px;
        outline: none;
        margin-top: 2rem;
        text-transform: uppercase;
        background-color: #522D80;
        color: white;  
        font-size: 1rem;  
        border: .5px solid rgba(82, 45, 128, 0.5);
        font-family: 'Montserrat', sans-serif;
    }

    .datePicker{
        height: 2.5rem;
        border-radius: 4px;
        padding-left: .5rem;
        box-sizing: border-box;
        border: .5px solid rgba(82, 45, 128, 0.5);
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        color: #777;
        opacity: 80%;
    }

    .react-datepicker-wrapper {
        width: 100%;
    }


    .name{
        margin-top: -.15rem
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
   
`
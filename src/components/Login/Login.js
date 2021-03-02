import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import Schema from "./LoginSchema.js";
import { UserContext } from "../../utils/UserContext.js";
import LoginForm from "./LoginForm.js";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

const initialFormValues = {
    email: "",
    password: "",
};

const initialFormErrors = {
    email: "",
    password: "",
};

const buttonDisabled = true;

export default function Login() {
    const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormErrors);
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const loginUser = (user) => {
        axiosWithAuth()
            .post("https://anywherefitness-server.herokuapp.com/login", user)
            .then((res) => {
                setUser(res.data.Profile);
                localStorage.setItem("token", res.data.token);
                setFormValues(initialFormValues);
                history.push("/dashboard");
            })
            .catch((err) => {
                console.log(err.res);
            });
    };

    const changes = (name, value) => {
        Yup.reach(Schema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...errors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0],
                });
            });

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const submitForm = () => {
        const newUser = {
            email: formValues.email,
            password: formValues.password,
        };
        loginUser(newUser);
    };

    useEffect(() => {
        Schema.isValid(formValues).then((valid) => {
            setButtonDisable(!valid);
        });
    }, [formValues]);

    return (
        <div>
            <div>
                <LoginForm
                    disabled={buttonDisable}
                    values={formValues}
                    change={changes}
                    errors={errors}
                    submit={submitForm}
                />
            </div>
            <button>
                <a href="/register">Don't have an account? Create one here!</a>
            </button>
        </div>
    );
}

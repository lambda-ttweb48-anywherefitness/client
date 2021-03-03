import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import Schema from "./RegisterSchema.js";
import { UserContext } from "../../utils/UserContext.js";
import RegisterForm from "./RegisterForm.js";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

const initialFormValues = {
    name: "",
    email: "",
    password: "",
    instructor: false,
};

const initialFormErrors = {
    name: "",
    email: "",
    password: "",
};

const initialServerErrors = {
    err: "",
};

const buttonDisabled = true;

export default function Register() {
    const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [serverErrors, setServerErrors] = useState(initialServerErrors);
    const [errors, setErrors] = useState(initialFormErrors);
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const createNewUser = (newUser) => {
        axiosWithAuth()
            .post(
                "https://anywherefitness-server.herokuapp.com/register/",
                newUser
            )
            .then((res) => {
                setUser(res.data.Profile);
                setFormValues(initialFormValues);
                localStorage.setItem("token", res.data.token);
                history.push("/dashboard");
            })
            .catch((err) => {
                // console.log(err.res);
                setServerErrors({ err: err.response.data.message });
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
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            instructor: formValues.instructor,
        };
        createNewUser(newUser);
    };

    useEffect(() => {
        Schema.isValid(formValues).then((valid) => {
            setButtonDisable(!valid);
        });
    }, [formValues]);

    return (
        <div>
            <RegisterForm
                disabled={buttonDisable}
                values={formValues}
                change={changes}
                errors={errors}
                submit={submitForm}
                serverErrors={serverErrors}
            />
        </div>
    );
}

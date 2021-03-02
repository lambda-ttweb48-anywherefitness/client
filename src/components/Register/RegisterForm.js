import React from "react";
import { useHistory } from "react-router-dom";

export default function LoginForm(props) {
    const { disabled, values, change, submit, errors } = props;

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
        history.push("/");
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const useValue = type === "checkbox" ? checked : value;
        change(name, useValue);
    };

    return (
        <div>
            <h1>Fill in the following information to get started!</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>
                            Enter Your Name
                            <input
                                type="text"
                                name="name"
                                onChange={onChange}
                                value={values.name}
                            />
                        </label>
                        <p>{errors.name}</p>
                    </div>
                    <div>
                        <label>
                            Enter your email
                            <input
                                type="email"
                                name="email"
                                onChange={onChange}
                                value={values.email}
                            />
                        </label>
                        <p>{errors.email}</p>
                    </div>
                    <div>
                        <label>
                            Set your password
                            <input
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={values.password}
                            />
                        </label>
                        <p>{errors.password}</p>
                    </div>
                    <div>
                        <label>
                            Are you an instructor?
                            <input
                                onChange={onChange}
                                value={values.instructor}
                                name="instructor"
                                type="checkbox"></input>
                        </label>
                    </div>
                    <div>
                        <button type="submit" disabled={disabled}>
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

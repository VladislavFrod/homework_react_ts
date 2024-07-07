import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import loginValidator from "../validators/login.validator";
import axios from "axios";

type IFormType={
    username: string,
    password: string,
    email: string,
}

const FormComponent = () => {
    let {formState: {errors, isValid}, register, handleSubmit} =
        useForm<IFormType>({mode: 'all', resolver: joiResolver(loginValidator)});

    let formSumbitCustomHandler = async (data: IFormType) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        console.log(response.data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSumbitCustomHandler)}>
                <label> UserName {errors.username && <div> {errors.username?.message}</div>}</label>
                <input type="text" {...register('username')}/>
                <label> Password {errors.password && <div> {errors.password?.message}</div>}</label>
                <input type="text" {...register('password')}/>
                <label> Email {errors.email && <div> {errors.email?.message}</div>}</label>
                <input type="text" {...register('email')}/>
                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;
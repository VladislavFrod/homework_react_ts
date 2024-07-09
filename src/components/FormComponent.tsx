import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import loginValidator from "../validators/login.validator";
import axios from "axios";
import {IForm} from "../models/IForm";
import Posts from "./Posts";
import postAll from "../services/api-services"


const FormComponent = () => {
    const [posts, setPosts] = React.useState<IForm[]>([]);

    useEffect(() => {
        postAll().then((data: IForm[]) => {
            setPosts(data);
        });
    }, []);

    let {formState: {errors, isValid}, register, handleSubmit} =
        useForm<IForm>({mode: 'all', resolver: joiResolver(loginValidator)});
    let formSumbitCustomHandler = async (data: IForm) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        console.log(response.data);
        setPosts([...posts, response.data]);
    }

    return (
        <div>
            <label> {errors.userId && <div> {errors.userId?.message}</div>}</label>
            <label>  {errors.body && <div> {errors.body?.message}</div>}</label>
            <label>  {errors.title && <div> {errors.title?.message}</div>}</label>
            <form onSubmit={handleSubmit(formSumbitCustomHandler)}>
                <input type="text" {...register('userId')} placeholder={'UserID'}/>
                <input type="text" {...register('title')} placeholder={'Title'}/>
                <input type="text" {...register('body')} placeholder={'Body'}/>
                <button disabled={!isValid}>send</button>
            </form>
            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export default FormComponent;
import React, { useContext, useState } from 'react';
import FormSection from '@components/sectionWithTabs'
import style from './login.module.scss'
import ActiveContent from './activeContent';
import { LoginContext } from '@API/context';
import { signUpUser, logInUser, signOutUser, passwordReset } from '@API/auth';

const LoginPage = () => {
    const content = [{checkbox: 'I agree with the terms and conditions of the site'}, {checkbox: 'Remember me'}]
    /* const [email, setEmail] = useContext(LoginContext)[0];
    const [password, setPassword]  = useContext(LoginContext)[1];
    const [repeatPassword, setRepeatPassword] = useContext(LoginContext)[2];

    const createNewUser = (e) => {
        e.preventDefault();
        signUpUser(email, password)
    } */

    return (
        <div className="container">
            <div className={style.wrapper}>
                <form className={style.loginForm}  onClick={e => e.preventDefault()}>
                    <FormSection tabs={['Sign up', 'Log in']}>
                        <ActiveContent content={content}/>
                    </FormSection>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
import React, { useContext, useState, useEffect } from 'react';
import MyInput from '@components/UI/input/MyInput';
import Checkbox from '@components/UI/checkbox/Checkbox';
import MyButtonBlack from '@components/UI/button/black_button/MyButtonBlack';
import {  AppContext, LoginContext } from '@API/context';
import { signUpUser, logInUser, signOutUser, passwordReset } from '@API/auth';
import style from './style.module.scss';
import { useNavigate } from 'react-router';



const ContentForm = ({activeTab, checkbox, setVisible}) => {
    const [auth, setAuth] = useContext(AppContext)[4]
    const [email, setEmail] = useContext(LoginContext)[0];
    const [password, setPassword]  = useContext(LoginContext)[1];
    const [repeatPassword, setRepeatPassword] = useContext(LoginContext)[2];
    const [isRight, setIsRight] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const createNewUser = (e) => {
        e.preventDefault();

        setIsRight(password.length < 6);
        setIsPasswordMatch(password === repeatPassword);

        if (password.length >= 6 && password === repeatPassword) {
            signUpUser(email, password);
            setEmail('');
            setPassword('');
            setRepeatPassword('');
            setVisible(false);
        }
    }

    const stateInputPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value === '') {
            setIsRight(false);
        }
    }

    const stateInputRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
        if (e.target.value === '') {
            setIsPasswordMatch(true);
        }
    }

    const loginUser = () => {
        logInUser(email, password);
        setAuth(true);
        localStorage.setItem('auth', 'true')
        navigate(`/React_shop/cart`);
        setEmail('');
        setPassword('');
        setVisible(false)
    }



    return (
        <>
            {
                activeTab === 1
                ?
                <div  className={style.loginBlock}>
                    <MyInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        text='Email address'
                    />
                    <MyInput 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type='password' 
                        text='Your password'
                        isRight={isRight}
                    />
                    <Checkbox text={checkbox}/>
                    <MyButtonBlack onClick={loginUser}>Continue</MyButtonBlack>
                    <a className={style.linkPassword} href="/">Fogot password</a>
                </div>     
                :
                <div  className={style.loginBlock}>
                    <MyInput 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}  
                        type='email' 
                        text='Email adress'
                    />
                    <MyInput 
                        value={password} 
                        onChange={stateInputPassword} 
                        type='password' text='Your password' 
                        isRight={isRight}
                    />
                    <p className={!isRight ? style.hide : style.show}>The password must be at least 6 characters long.</p>
                    <MyInput 
                        value={repeatPassword} 
                        onChange={stateInputRepeatPassword } 
                        type='password' 
                        text='Repeat password'
                    />
                    <p className={!isPasswordMatch ? style.show : style.hide}>Password mismatch</p>
                    <Checkbox text={checkbox}/>
                    <MyButtonBlack onClick={createNewUser}>Continue</MyButtonBlack>
                </div> 
            }
        </>  
    );
};



export default ContentForm;
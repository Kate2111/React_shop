import React, { useContext } from 'react';
import MyInput from '@components/UI/input/MyInput';
import Checkbox from '@components/UI/checkbox/Checkbox';
import MyButtonBlack from '@components/UI/button/black_button/MyButtonBlack';
import { LoginContext } from '@API/context';
import { signUpUser, logInUser, signOutUser, passwordReset } from '@API/auth';
import style from './style.module.scss';


const ContentForm = ({activeTab, checkbox}) => {
    const [email, setEmail] = useContext(LoginContext)[0];
    const [password, setPassword]  = useContext(LoginContext)[1];
    const [repeatPassword, setRepeatPassword] = useContext(LoginContext)[2];

    const createNewUser = (e) => {
        e.preventDefault();
        signUpUser(email, password)
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
                    <MyInput value={password} onChange={e => setPassword(e.target.value)} type='password' text='Your password'/>
                    <Checkbox text={checkbox}/>
                    <MyButtonBlack type='submit'>Continue</MyButtonBlack>
                    <a className={style.linkPassword} href="/">Fogot password</a>
                </div>     
                :
                <div  className={style.loginBlock}>
                    <MyInput value={email} onChange={e => setEmail(e.target.value)}  type='email' text='Email adress'/>
                    <MyInput value={password} onChange={e => setPassword(e.target.value)} type='password' text='Your password'/>
                    <MyInput value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} type='password' text='Repeat password'/>
                    <Checkbox text={checkbox}/>
                    <MyButtonBlack onClick={createNewUser}>Continue</MyButtonBlack>
                </div> 
            }
        </>  
    );
};



export default ContentForm;
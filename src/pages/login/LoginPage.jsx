import React, { useContext, useState } from 'react';
import FormSection from '@components/sectionWithTabs'
import style from './login.module.scss'
import ActiveContent from './activeContent';
import Modal from '../../components/UI/modal/Modal';
import MyButtonBlack from '../../components/UI/button/black_button/MyButtonBlack'
import { AppContext } from '../../API/context';
import { signOutUser } from '@API/auth';

const LoginPage = ({visible, setVisible}) => {
    const content = [{checkbox: 'I agree with the terms and conditions of the site'}, {checkbox: 'Remember me'}]
    const [auth, setAuth] = useContext(AppContext)[4];


    const signOut = () => {
        setAuth(false);
        localStorage.removeItem('auth');  
        signOutUser();
        setVisible(false);
    }

    return (
        <>
            {
                !auth
                ?
                <Modal visible={visible} setVisible={setVisible}>
                    <FormSection tabs={['Sign up', 'Log in']}>
                        <ActiveContent content={content} setVisible={setVisible}/>
                    </FormSection>
                </Modal> 
                :
                <Modal visible={visible} setVisible={setVisible}>
                    <MyButtonBlack onClick={signOut}>Sign out</MyButtonBlack>
                </Modal>

            }
            
           
        </>
    );
};

export default LoginPage;


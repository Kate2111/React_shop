import React from 'react';
import style from './foter.module.scss'
import SocialList from './social/SocialList';
import MenuList from './menu/MenuList'
import MyInput from '../../UI/input/MyInput';
import MyButtonBlack from '../../UI/button/black_button/MyButtonBlack';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className={style.content}>
                <div className="container">
                    <div className={style.inner}>
                        <div className={style.info}>
                            <h6 className={style.title}>Contact Us</h6>
                            <p className={style.text}>
                                Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy
                            </p>
                            <a className={style.link} href="mailto:ouremailaddress@email.com">ouremailaddress@email.com</a>
                            <form className={style.form}>
                                <MyInput text={"Subscribe by email"}/>
                                <MyButtonBlack type={"submit"}>Send</MyButtonBlack>
                            </form>
                        </div>

                        <SocialList/>
                        
                        <nav className={style.menu}>
                            <MenuList/>
                        </nav>
                    </div>
                </div> 
            </div>
            <div className={style.copyright}>
                <div className="container">
                    <p>674 Gonzales Drive.   Washington, PA 15301</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
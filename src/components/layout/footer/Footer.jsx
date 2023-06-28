import React from 'react';
import style from './foter.module.scss'
import SocialList from './social/SocialList';
import MenuList from './menu/MenuList'


const Footer = () => {
    return (
        <footer>
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
                                <input className={style.input} type="text" placeholder="Subscribe by email"/>
                                <button className={style.button} type="submit">Send</button>
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
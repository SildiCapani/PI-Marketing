import React, { useContext, useEffect } from "react";
import '../css/Home.css'
import { Link } from "react-router-dom";
import Services from "./Services";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../context/authContext";
import { useTranslation } from "react-i18next";




const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);

  

  const { currentUser } = useContext(AuthContext);

  const name = currentUser?.name ?? ''; 
    return(
        <div className="home">
          <div className="body">
            {name? <p style={{fontSize: "1.5vw"}} >HI {name}!</p> : ''}  
            <h1 className="heading">{t('header')}<br/>{t('header0')}</h1>
                
           <p className="dec">{t('dec')}<br/> 
           {t('dec0')}<br/> 
           {t('dec1')}<br/>
           {t('dec2')}</p>             
                 
            <Link to='/contact' className="btn btn-primary">{t('contact-btn')}</Link>

            <h1 className="heading bold" data-aos="fade-right"> {t('slogan')}</h1>
          </div>
          <div style={{height: '104vh'}}></div>
               <Services/> 
         </div>
    )
}
export default Home;
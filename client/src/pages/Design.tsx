import React, { useEffect } from 'react';
import '../css/Pages.css';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Design = () => {

    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({ duration: 1500 })
      }, []);

  return (
    <div className='design'>
        <div className='design-text'>
        <h1 data-aos="fade-up-right">{t("graphic")}</h1>
        
        <p>{t("design-text")} <br/>
        {t("design-text1")}<br/>
        {t("design-text2")}<br/>
        {t("design-text3")}
        </p>
        <div style={{height: '4vw'}}></div>
        <p>{t("design-text4")}<br/>
        {t("design-text5")}<br/>
        {t("design-text6")} <br/>
        {t("design-text7")} <br/> 
        {t("design-text8")}
        </p>
        </div>

        <div data-aos="fade-up" className='design-options'>
            <p>{t("design")}</p> <p>{t("design1")}</p> <p>{t("design2")}</p> <p>{t("design3")}</p></div>
            <div data-aos="fade-up" data-aos-duration="1500" className='design-options n'><p>{t("design4")}</p> <p>{t("design5")}</p> <p>{t("design6")}</p> <p>{t("design7")}</p> <p>{t("design8")}</p></div> 
        
        <div className='design-desc'>
            <p>{t("design-dsc")}</p>
            <p>{t("design-dsc1")}</p>
            <p className='design-p'>{t("design-dsc2")} </p>
            <Link to={'/contact'} className='btn btn-primary' style={{fontSize: '2vw'}}>{t("contact-btn")}</Link>
        </div>
    </div>
  )
}

export default Design;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {

  const { t } = useTranslation();


  return (
  <div className='about-bg'>
    <div className='about-us'>
      <div className='about- first'>
        <h1 className='heading' style={{fontSize: "2.4vw"}}>{t("about")}</h1><br/>
        <p>{t("about1.0")}</p>
        <p>{t("about1.1")}</p>
        <p>{t("about1.2")}</p>
        <p>{t("about1.3")}</p>
        <p>{t("about1.4")}</p>
        <p>{t("about1.5")}</p>
        <p>{t("about1.6")}</p>
        <p>{t("about1.7")}</p>
        <p>{t("about1.8")}</p>
        <p>{t("about1.9")} </p>
        <p>{t("about1.10")}</p>
        <p>{t("about1.11")} </p>
        <p>{t("about1.12")}</p>

        <span style={{height: '4vw'}}></span>

        <span className='about-span'>
          <span>   
        <h3> {t("about-info")} </h3>
        <h3> {t("about-info1")} </h3>
        <h3> {t("about-info2")} </h3>
        <h3> {t("about-info3")} </h3><br/></span>

        <span><Link to='/contact' className="btn btn-primary" style={{width: '10vw', textAlign: 'center'}}>{t('contact-btn')}</Link></span>
      </span>

      </div>


      <div className='about- second'>
      <h1 className='heading' style={{fontSize: "2.4vw"}}>{t("about2.0")}</h1><br/>
      <p>{t("about2.1")}</p>
      <p> {t("about2.2")} </p>
      <p> {t("about2.3")} </p>
      <p>{t("about2.4")}</p>
      <span className='about-profiles'><p>• Marketing </p><p>•  SMM</p></span>
      <span className='about-profiles'><p>• Recruiting  </p><p>•  Design</p></span>
      </div>


      <div className='about- third'>
      <h1 className='heading' style={{fontSize: "2.4vw"}}>{t("about3.0")}</h1><br/>
        <p>{t("about3.1")}</p>
        <p>{t("about3.2")}</p>
        <p>{t("about3.3")}</p>
        <p>{t("about3.4")} </p>
        <p>{t("about3.5")}</p>
      </div>
    </div>
  </div>
  )
}

export default About
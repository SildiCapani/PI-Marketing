import React from 'react';
import '../css/Pages.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const WebDevelopment = () => {

  const { t } = useTranslation();

  return (
    <div className='webdev'>
      
      <div className='web-desing'>
        <span><h1>WEB</h1>
        <h1>DESING</h1></span>
        <span><p>PI Marketing is your go-to partner </p> <p>for expert web desing and</p> <p>implementation.</p></span>
      </div>

      <div className='web-dev'>
        <span><h1>WEB</h1>
        <h1>DEVELOPMENT</h1></span>
        <span><p> We will make sure that potential customers </p> <p> or employees can easily find you online, </p> <p> while also managing to stand out from the</p>
        <p>competition with distinctive presence.</p> <p> With our help, success awaits! </p>
        </span>
      </div>

      <div className='web-info'>
      <h2>With our help, success awaits!</h2>
      <h1>NEW. ADVANCED. PROMISING.</h1>

      <span><p>Our agency delivers customized orders.</p> <p>Looking for more information? </p>
      <p> Our friendly staff is here to help - conact us and we'll get back to you with answers! </p></span>

      <span><Link to='/contact' className="btn btn-primary" style={{width: '10vw', border: '5px solid #9D3EC1'}}>{t('contact-btn')}</Link></span>
      </div>

    </div>
  )
}

export default WebDevelopment
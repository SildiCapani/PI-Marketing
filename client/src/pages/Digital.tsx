import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Digital = () => {


  const { t } = useTranslation();


  return (
    <div className='digital'>

      <span className='digital- first'>
      <span>
      <h1>{t('digital')}</h1>
      <h1>{t('digital1')}</h1></span>
    
      <span>
      <p>{t('digital1.1')} </p>
      <p>{t('digital1.2')} </p>
      <p>{t('digital1.3')} </p>
      <p>{t('digital1.4')} </p>
      <p>{t('digital1.5')} </p>
      <p>{t('digital1.6')}</p>
      <p> {t('digital1.7')} </p></span>
      
        <span className='span'>
        <p>{t('digital2')} </p>
        <p className='p-color'>{t('digital2.1')} </p>
        <p className='p-color'>{t('digital2.2')} </p>
        <p className='p-color'>{t('digital2.3')} </p>
        <p className='p-color'>{t('digital2.4')} </p>
        </span>
      
      </span>

      <span className='digital- second'>
        <span>
        <p>{t('digital3')} </p>
        <p>{t('digital3.1')} </p>
        <p>{t('digital3.2')} </p></span>

        <span><Link to='/contact' className="btn btn-primary" style={{ fontSize: "1.5vw" }}>{t('contact-btn')}</Link></span>
        
        <span className='span-second'>
        <p className='p-color' style={{ fontSize: "1.5vw" }}>{t('digital3.3')} </p>
        <p className='p-color' style={{ fontSize: "1.5vw" }}>{t('digital3.4')} </p>
        </span>
      </span>
    
    </div>
  )
}

export default Digital
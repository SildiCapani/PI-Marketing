import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Marketing = () => {


    const { t } = useTranslation();


  return (
    <div className='marketing'>

        <span className='first'>
            <span>
            <h1>{t('marketing')} </h1>
            <h1>{t('marketing1')}</h1> 
            </span>

            <span>
                <p>{t('marketing1.2')} </p>
                <p>{t('marketing1.3')} </p>
                <p>{t('marketing1.4')} </p>
                <p>{t('marketing1.5')} </p>
                <p>{t('marketing1.6')} </p>
                <p>{t('marketing1.7')}</p>
            </span>
           
        </span>

        <span className='second'>
            <span>
            <p>• {t('marketing2.1')} </p>
            <p>{t('marketing2.2')}</p>
            <p>• {t('marketing2.3')}</p>
            <p>{t('marketing2.4')} </p>
            <p>{t('marketing2.5')} </p>
            <p>• {t('marketing2.6')} </p>
            <p>{t('marketing2.7')}</p>
            </span>

            <span className='span'>

            <span className='third'><Link to='/contact' className="btn btn-primary" style={{color: 'white', fontSize: '1.5vw' }}>{t('contact-btn')}</Link></span>
            <span>
            <p>{t('marketing3.1')} </p>
            <p>{t('marketing3.2')} </p>
            <p>{t('marketing3.3')}</p>
            </span>
            </span>
        </span>
        
    </div>
  )
}

export default Marketing
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const SMM = () => {


    const { t } = useTranslation();

  return (
    <div className='smm'>
        <span>
        <h1>{t('smm')} </h1>
        <h1>{t('smm ')}</h1></span>

        <span className='first'>
        <p>{t('smm1')}</p>
        <p>{t('smm1.2')} </p>
        <p>{t('smm1.3')} </p>
        <p>{t('smm1.4')}</p>
        <p>{t('smm1.5')} </p>
        <p>{t('smm1.6')}</p>
        <p>{t('smm1.7')}</p>
        </span>

        <span className='second'> 
            <p>• {t('smm3')}</p>
            <p>• {t('smm3.1')}</p>
            <p>• {t('smm3.2')}</p>
            <p>• {t('smm3.3')}</p>
            <p>{t('smm3.4')}</p>
        </span>

        <span className='third'>
            <h2>{t('smm4')}</h2>
        </span>

        <span className='third'><Link to='/contact' className="btn btn-primary" style={{color: 'white', fontSize: '1.5vw'}}>{t('contact-btn')}</Link></span>    
            
    </div>
  )
}

export default SMM
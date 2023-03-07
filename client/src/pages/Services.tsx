import React, { useEffect } from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img from '../images/recruitment.png'
import img1 from '../images/social-media2.png'
import img2 from '../images/profit2.png'
import img3 from '../images/social-media (1)2.png'
import img4 from '../images/illustration2.png'
import img5 from '../images/data.png'
import { useTranslation } from 'react-i18next';





const Services = () => {

  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);
  


  return (

    <div className='home-services'>

      <h1 data-aos="fade-right"> {t('our_services')} </h1>
      <p data-aos="fade-right"> {t('services_dec')} </p>
      <div className='services'>

        <Link to='/posts' data-aos="fade-up" className='service hidden' style={{textDecoration: 'none'}}>
          <img src={img} />
          <p >{t('service')}</p>
        </Link>

        <Link to='/' data-aos="fade-up" className='service hidden' style={{textDecoration: 'none'}}>
        <img src={img1} />
          <p>{t('service1')} <br/> {t('service1.2')}</p>
        </Link>
        
        <Link to='/' data-aos="fade-up" className='service hidden' style={{textDecoration: 'none'}}>
        <img src={img2} />
          <p>{t('service2')} <br/> {t('service2.2')}</p>
        </Link>
          </div>
      <div className='services'>
      
        <Link to='/digital' data-aos="fade-up" className='service' style={{textDecoration: 'none'}}>
          <img src={img3} />
          <p>{t('service3')}</p>
        </Link>
        
        <Link to='/graphic-design' data-aos="fade-up" className='service' style={{textDecoration: 'none'}}>
        <img src={img4} />
          <p>{t('service4')}</p>
        </Link>

        <Link to='/webdev'data-aos="fade-up"  className='service' style={{textDecoration: 'none'}}>
        <img src={img5} />
          <p>{t('service5')}</p>
        </Link>
      </div>
    </div>
  )
}

export default Services
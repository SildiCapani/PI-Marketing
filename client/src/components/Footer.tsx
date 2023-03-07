import '../css/components.css';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsLinkedin, BsWhatsapp, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import i18next from 'i18next'





const Footer = () => {

  const languages = [
    {
        id: 1,
        code: "en",
        name: "EN"
    },
    {
        id: 2,
        code: "de",
        name: "DE"
    },
    {
        id: 3,
        code: "al",
        name: "AL"
    }
]

  return (
    <div className='footer'>
      <div className='footers'>
        <div className='footer-content'>
          <div className='footer-nav'>
            <Link to='/' className='footer-link'>HOME</Link>
            <Link to='/about' className='footer-link'>ABOUT US</Link>
            <Link to='/services' className='footer-link'>OUR SERVICES</Link>
            <Link to='/signup' className='footer-link'>SIGN UP</Link>
          </div>
          <div className='footer-nav faq'>
            <a href='/' className='footer-link'>FAQ</a>
            <a href='/' className='footer-link'> TERMS & CONDITIONS</a>
            <a href='/' className='footer-link'>PRIVACY POLICY</a>
          </div>
          <div className='footer-language'>
            <p className='footer-link' style={{fontSize: '0.7rem'}}>choose your language</p>
            {languages.map((language) => (
              <span className='footer-link' key={language.id} onClick={() => i18next.changeLanguage(language.code)} > {language.name} |</span>
            ))}
          </div>
          <div className='footer-contact'>
            <p className='footer-link'>contact us</p>
            <span className='footer-icons'>
            <a href='/' className='footer-link'><AiOutlineMail /></a>
            <a href='/' className='footer-link'><BsLinkedin /></a>
            <a href='/' className='footer-link'><BsWhatsapp /></a>
            <a href='/' className='footer-link'><BsFacebook /></a>
            <a href='/' className='footer-link'><BsInstagram /></a>
            <a href='/' className='footer-link'><FaTiktok /></a>
            <a href='/' className='footer-link'><BsTwitter /></a>
            </span>
          </div>
        </div>
        <span className='footer-dev'>Developed by<a href='https://www.linkedin.com/in/brisild-capani/' target='_blank'> Brisild Capani</a></span>
      </div>
      
    </div>
  )
}

export default Footer
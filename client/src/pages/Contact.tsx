import React, { useState } from "react";
import "../css/Home.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Contact = () => {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email); 
    formData.append('message', message);

    try {
     const res = await axios.post("http://localhost:8800/api/send-email/contact", formData);
      setFormData(res.data)
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const { name, email, message } = formData;
  

  return (
    <div className="contact">
        
        <div className="description">
          {t('contact')} <br/>
          {t('contact1')}<br/>
          {t('contact2')}<br/>
          {t('contact3')}<br/>
          {t('contact4')}
        </div>

        <div className="contact-form">
          <ul>
            <li>{t('get_in_touch')}</li>
          </ul>
          <h1>{t('form-title')}</h1>

           <form  onSubmit={handleSubmit}>

            <input className='input' type='text' placeholder='Name' name="name" value={name} onChange={handleChange} required/>
            <input className="input" type='email'  placeholder="E-mail" name="email" value={email} onChange={handleChange} required/>
            <textarea className="input" name="message" placeholder="message" value={message} onChange={handleChange} required/>

            <p className="checkbox"><input type="checkbox" name="terms" id="terms" required/> I accept the <u>Terms and Conditions</u></p>
            <button className="submit-btn" type="submit"> {t('send')} </button>
          </form>
        </div>
    </div>
  );
};

export default Contact;

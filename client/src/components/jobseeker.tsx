import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';


const jobseeker = () => {

    const { t } = useTranslation();


    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      tel: '',
      email: '',
      city: '',
      country: '',
      cv: null as File | null,
      message: ''
    });
  
    const handleChange = (e: any) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleFileChange = (e: any) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    };
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('tel', tel);
      formData.append('email', email);
      formData.append('city', city);
      formData.append('country', country);
      if(cv !== null){
        formData.append('cv', cv, cv.name);
      }
      
      formData.append('message', message);
  
      try {
       const res = await axios.post("http://localhost:8800/api/send-email", formData);
        setFormData(res.data)
        window.location.reload()
      } catch (err) {
        console.error(err);
      }
    };
  
    const { name, surname, tel, email, city, country, cv, message } = formData;
  


  return (
    <div className='posts'>
        <h1 className='jobseeker-header'>{t('jobseeker-header')}</h1>
        <p className='jobseeker-desc'>{t('jobseeker-desc')}</p>


        <form className='jobseeker-form' onSubmit={handleSubmit}>
            <span className='jobseeker-span'>
            <input className='input' type='text' name='name' placeholder='name' value={name} onChange={handleChange}/>
            <input className='input' type='text' name='surname' placeholder='surname' value={surname} onChange={handleChange}/>
            </span>
            <span className='jobseeker-span'>
            <input className='input one' type="tel" name='tel' placeholder='tel' value={tel}  onChange={handleChange}/>
            <input className='input one' type="email" name='email' placeholder='e-mail' value={email}  onChange={handleChange}/>
            </span>
            <span className='jobseeker-span'>
            <input className='input' type="text" name="city" placeholder="city" value={city}  onChange={handleChange}/>
            <input className='input' type="text" name='country' placeholder='country' value={country}  onChange={handleChange}/>
            </span>
            CV:
            <input className='input two' type="file" name="cv" placeholder='CV' onChange={handleFileChange}/>
            <textarea className="textarea-input" id="meassge" name="message" rows={5} placeholder="message"   onChange={handleChange}/>
            <span className="checkbox"><input type="checkbox" name="terms" id="terms" required/><p className='checkbox-text'> I accept the <u>Terms and Conditions</u></p></span>
            <button className="submit-btn-jobseeker" type="submit">  {t('send')} </button>
        </form>
    </div>
  )
}

export default jobseeker
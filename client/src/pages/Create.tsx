import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';


const Create = () => {

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate()

    const state = useLocation().state

     const [title, setTitle] = useState(state?.title ||'');
     const [position, setPosition] = useState(state?.position ||'');
     const [email, setEmail] = useState(state?.email ||'');
     const [company, setCompany] = useState(state?.cname ||'');
     const [web, setWeb] = useState(state?.web ||'');
     const [tel, setTel] = useState(state?.tel ||'');
     const [city, setCity] = useState(state?.city ||'');
     const [type, setType] = useState(state?.type ||'');
     const [file, setFile] = useState<File | null>(null);
     const [desc, setDesc] = useState(state?.desc ||'');
     const [req, setReq ] = useState(state?.req ||'');
     const [about, setAbout] = useState(state?.about ||'');
     const [res, setRes] = useState(state?.about ||'');

     const handleFileChange = (e: any) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
      }
     };

    const hanldleClick = async (e: any) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('position',position);
      formData.append('email', email);
      formData.append('company', company);
      formData.append('web', web);
      formData.append('tel',tel);
      formData.append('type', type);
      if(!state){
        formData.append('date', moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"));
      }
      if (file) {
        formData.append('file', file);
      } else {
        formData.append('file', '');
      }
      formData.append('city', city);
      formData.append('desc', desc);
      formData.append('req', req);
      formData.append('res', res);
      formData.append('about', about);


      try{
        if (state) {
          await axios.put(`http://localhost:8800/api/posts/${state.id}`, formData, { withCredentials: true });
          navigate(-1)
        } else {
          const imgUrl = await upload();
          await axios.post('http://localhost:8800/api/posts', formData, { withCredentials: true } );
          navigate(-1)
        }
      }catch(err){
        console.log(err)
      }
   }

  //  const handleChange = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };


    const upload = async () => {
      try{
        const formData = new FormData();
        if (file) {
          formData.append('file', file);
        }
        const res = await axios.post('http://localhost:8800/api/upload', formData)
        console.log(formData, res.data)
      }catch(err){
        console.log(err)
      }
    } 

  return (
    <>
    {currentUser?.idcompany === 1 ? 
    <form className='create'>
        <p>Create</p>
        <div className='form'>
          
          <input type='text' placeholder='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type='text' placeholder='positoin' name='position' value={position} onChange={(e) => setPosition(e.target.value)}/>
          <input type='text' placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type='text' placeholder='company name' name='company' value={company} onChange={(e) => setCompany(e.target.value)}/>
          <input type='text' placeholder='website' name='web' value={web} onChange={(e) => setWeb(e.target.value)}/>
          <input type="tel" placeholder='tel' name='tel' value={tel} onChange={(e) => setTel(e.target.value)}/>
          <input type="text" placeholder='city' name='city' value={city} onChange={(e) => setCity(e.target.value)}/>
          <input type="text" placeholder='Full time or part' name='type' value={type} onChange={(e) => setType(e.target.value)}/>
          <input type='file' name='logo' onChange={handleFileChange}/><br/>

 
          <label htmlFor='req' className='text-title'> About the company </label>
          <ReactQuill className='quill' id='about' theme="snow" value={about} onChange={setAbout} /><br/><br/><br/><br/>

          <label htmlFor='desc'> Description </label>
          <ReactQuill className='quill' id='desc' theme="snow" value={desc} onChange={setDesc} /><br/>

          <label htmlFor='req' className='text-title'> Responsibilities </label>
          <ReactQuill className='quill' id='res' theme="snow" value={res} onChange={setRes} /><br/>

          <label htmlFor='req' className='text-title'> Requirements </label>
          <ReactQuill className='quill' id='req' theme="snow" value={req} onChange={setReq} /><br/>


          <button type='submit' className='finish' onClick={hanldleClick}>Submit</button>
        </div>
        
    </form>
    : "ERROR PAGE NOT FOUND"
  }</>)
}

export default Create
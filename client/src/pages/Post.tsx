import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';


  interface Post {
    idcompany: number;
    title: string;
    email: string;
    cname: string;
    web: string
    tel: string;
    position: string;
    logo: string;
    date: Date;
    desc: any;
    req: any;
    about: any;
    res: string;
    type: string;
  }
  


const Post: React.FC = () => {

  const navigate = useNavigate()

  const { t } = useTranslation();

  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState<Post>({} as Post); 

  const location = useLocation();

  const postId = location.pathname.split("/")[2]
  
    useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
          setPost(res.data)
        }catch(err){
          console.log(err);
        }
      };
      fetchData();
    }, [postId])

    
    const handleDelete = async ()=> {

      const token = localStorage.getItem("access_token");
      
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        };

      try{
        const res = await axios.delete(`http://localhost:8800/api/posts/${postId}`, config); 
        console.log(res)
        navigate(-1)
      }catch(err){
        console.log(err);
      }
    }

    const getText = (html: any) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }

  return (
    <div className='post- div'>
      <p>Posted {moment(post.date).fromNow()}</p>
      <h1 className='post- title'>{post.title}</h1>
      <div className='post- border'>
          <span className='post- info-span'>
          <img src={`../upload/${post.logo}`} alt="logo" height={200} width={200} />
          <span className='post- info-span-1'>
            <h1>{post.cname}</h1>
            <p><b>E-mail:</b>  {post.email}</p>
            <p><b>Web:</b> <a href={post.web} target="_blank">{post.web}</a> </p>
            <p><b>Tel:</b>  {post.tel}</p>
          </span>
          </span>

          <div className='post- about'>
            <h2>{t("post-about")}:</h2>
            <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.about),
          }} ></p>
          </div>

          <div className='post- info'>
          <span className='post- info-work'>
          <h2>{t("post-position")}:</h2>
          <p>{post.position}</p>
          </span>
          <span className='post- info-type'>
          <h2>{t("post-type")}:</h2>
          <p>{post.type}</p>
          </span>
          </div>

          <div className='post- desc'>
            <h2>{t("post-desc")}:</h2>
            <p           dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}></p>
          </div>

          <div className='post- res'>
            <h2>{t("post-res")}:</h2>
            <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.res),
          }} ></p>
          </div>

          <div className="post- req">
            <h2>{t("post-req")}:</h2>
            <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.req),
          }} ></p>
          </div>

          <button className='submit- post'>{t("post-apply")}</button>
      </div>


      {currentUser && currentUser.idcompany === 1 ? (<span><button onClick={handleDelete}> Delte</button><button><Link to='/create?edit=2' state={post}>Edit</Link></button></span>) : "" }
    </div>
  )
}

export default Post
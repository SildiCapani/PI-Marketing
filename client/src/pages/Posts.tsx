import React, { useEffect, useState } from 'react';
import '../css/Posts.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';




  

const Posts: React.FC = () => {

  const { t } = useTranslation();

  interface Post {
    id: number;
    title: string;
    position: string;
    city: string;
  }
  
    const [posts,setPosts] = useState<Array<Post> | []>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [page, setPage] = useState<number>(1);


    const location = useLocation();


    useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const res = await axios.get("http://localhost:8800/api/posts")
          setPosts(res.data)
        }catch(err){
          console.log(err);
        }
      };
      fetchData();
    }, [])
  

    
  //     // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice().reverse().slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // // Render page numbers
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  const maxPerPage = 7;

  const maxPage = Math.ceil(posts.length / maxPerPage);

  const handleNextPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const postsToShow = posts.slice((page - 1) * maxPerPage, page * maxPerPage);



  return (
    <div className='posts'>
        <div className='posts-w'></div>
        <p className='jobs'><b>{t('job')} <br/> {t('job1')} </b></p>

        <Link to={'/jobseeker'} className='jobseeker'>{t('jobseeker')}</Link>
        <Link to={'/employer'} className='jobhiring'>{t('jobhiring')}</Link>

        <div className='list' >
         <span className='list-title'><h2>{t('c/p')}</h2> <h2>{t('c/p1')}</h2></span> 
          {postsToShow.slice().reverse().map((post: any) => (
            <div key={post.id}>
            <div className='post' >
            <div className='post-name'>
              <p><Link to={`/post/${post.id}`}>{post.title}</Link></p>
              <p><Link to={`/post/${post.id}`}>{post.position}</Link></p>
            </div>
            <div>
              <p className='city'>{post.city}</p>
            </div>
            <br/><br/>
            </div>
            <hr/>
            </div>
          ))}

            <div className='pagination'>
                <button onClick={handlePrevPage} disabled={page === 1}>{t('prev')}</button>
                {Array.from({ length: maxPage }, (_, i) => i + 1).map((pageNum) => (
                  <button key={pageNum} onClick={() => setPage(pageNum)} disabled={pageNum === page}>{pageNum}</button>
                ))}
                <button onClick={handleNextPage} disabled={page === maxPage}>{t('next')}</button>
            </div>

        </div> 
    </div>
  )
}

export default Posts
import React, { useContext, useState } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About'
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register'
import Posts from './pages/Posts';
import Create from './pages/Create';
import WebDevelopment from './pages/WebDevelopment';
import './App.css'
import { AuthContextProvider } from './context/authContext';
import Jobseeker from './components/jobseeker';
import Employer from './components/employer';
import Design from './pages/Design';
import Pricing from './pages/Pricing';
import Digital from './pages/Digital';
import SMM from './pages/SMM';
import Marketing from './pages/Marketing';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/contact',
          element:<Contact/>
        },
        {
          path: '/services',
          element:<Services/>
        },
        {
          path: '/post/:id',
          element:<Post/>
        },
        {
          path: '/posts',
          element:<Posts/>
        },
        {
          path: '/create',
          element:<Create/>
        
        },
        {
          path: '/webdev',
          element:<WebDevelopment/>
        },
        {
          path: '/jobseeker',
          element:<Jobseeker/>
        },
        {
          path: '/employer',
          element:<Employer/>
        },
        {
          path: '/graphic-design',
          element:<Design/>
        },
        {
          path: '/pricing',
          element:<Pricing/>
        },
        {
          path: '/digital',
          element: <Digital/>
        },
        {
          path: '/smm',
          element: <SMM/>
        },
        {
          path: '/marketing',
          element: <Marketing/>
        }
      ]
   
    },
    {
        path: '*',
        element:<ErrorPage/>
    },
    {
      path: '/login',
      element:<Login/>
    },
    {
      path: '/register',
      element:<Register/>
    }
  ]);

  return (
      <React.StrictMode>
        <AuthContextProvider>
          <RouterProvider router={router}/>
        </AuthContextProvider>
      </React.StrictMode>
  )
}


const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import About from './Aplication/components/about.jsx';
import Social from './Aplication/components/social.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './login form/login.jsx';
import RegisterPage from './login form/register.jsx';

const router = createBrowserRouter ([
  {
    path : '/RenekiShop/',
    element : <App/>
  },
  {
    path : '/RenekiShop/about',
    element : <About/>
  },
  {
    path : '/RenekiShop/social',
    element : <Social/>
  },
  {
    path : '/RenekiShop/register',
    element : <RegisterPage/>
  },
  {
    path : '/RenekiShop/login',
    element : <LoginPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
)

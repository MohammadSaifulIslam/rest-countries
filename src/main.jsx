import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"service",
        element:<Service></Service>
      },
      {
        path:'countries',
        element:<Countries></Countries>,
        loader: () => fetch(`https://restcountries.com/v3.1/all`)
      },
      {
        path:'country/:countryId',
        element: <CountryDetails></CountryDetails>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      },
      {
        path:"contact",
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

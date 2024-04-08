import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GoldCoastPage from './pages/GoldCoast/GoldCoastPage.jsx';
import GoldCoastPropertyDetailsPage from './pages/GoldCoast/GoldCoastPropertyDetailsPage.jsx';
import LoganPage from './pages/Logan/LoganPage.jsx';
import IpswichPage from './pages/Ipswich/IpswichPage.jsx';
import BrisbanePage from './pages/Brisbane/BrisbanePage.jsx';
import SunshineCoastPage from './pages/SunshineCoast/SunshineCoastPage.jsx';
import ContactPage from "./pages/ContactPage.jsx";

import NavBar from './components/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path:"/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/locations/gold-coast", element: <GoldCoastPage /> },
      { path: "/locations/gold-coast/properties/:propertyId", element: <GoldCoastPropertyDetailsPage /> },
      { path: "/locations/logan", element: <LoganPage /> },
      { path: "/locations/ipswich", element: <IpswichPage /> },
      { path: "/locations/brisbane", element: <BrisbanePage /> },
      { path: "/locations/sunshine-coast", element: <SunshineCoastPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
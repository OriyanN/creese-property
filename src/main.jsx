import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// import { routeConfig } from './routes';
import './index.css'

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from './pages/ServicesPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';
import GoldCoastPage from './pages/GoldCoast/GoldCoastPage.jsx';
import GoldCoastPropertyDetailsPage from './pages/GoldCoast/GoldCoastPropertyDetailsPage.jsx';
import LoganPage from './pages/Logan/LoganPage.jsx';
import IpswichPage from './pages/Ipswich/IpswichPage.jsx';
import BrisbanePage from './pages/Brisbane/BrisbanePage.jsx';
import SunshineCoastPage from './pages/SunshineCoast/SunshineCoastPage.jsx';
import ContactPage from "./pages/ContactPage.jsx";
import CareersPage from './pages/CareersPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsConditionPage from './pages/TermsConditionsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import NavBar from './components/NavBar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path:"/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/leasing", element: <LocationsPage /> },
      { path: "/locations/gold-coast", element: <GoldCoastPage /> },
      { path: "/locations/gold-coast/properties/:propertyId", element: <GoldCoastPropertyDetailsPage /> },
      { path: "/locations/logan", element: <LoganPage /> },
      { path: "/locations/ipswich", element: <IpswichPage /> },
      { path: "/locations/brisbane", element: <BrisbanePage /> },
      { path: "/locations/sunshine-coast", element: <SunshineCoastPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/terms-conditions", element: <TermsConditionPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
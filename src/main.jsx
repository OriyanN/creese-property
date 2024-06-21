import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import NavBar from './components/NavBar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';
import BrisbanePropertyDetailsPage from './pages/Brisbane/BrisbanePropertyDetailsPage.jsx';
import IpswichPropertyDetailsPage from './pages/Ipswich/IpswichPropertyDetailsPage.jsx';
import AssistantPropertyManagerPage from './pages/AssistantPropertyManager.jsx';
// const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
// const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));
const GoldCoastPropertyDetailsPage = lazy(() => import('./pages/GoldCoast/GoldCoastPropertyDetailsPage.jsx'));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const CareersPage = lazy(() => import('./pages/CareersPage.jsx'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.jsx'));
const TermsConditionPage = lazy(() => import('./pages/TermsConditionsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/leasing", element: <LocationsPage /> },
      { path: "/leasing/gold-coast/properties/:propertyId", element: <GoldCoastPropertyDetailsPage /> },
      { path: "/leasing/brisbane/properties/:propertyId", element: <BrisbanePropertyDetailsPage /> },
      { path: "/leasing/ipswich/properties/:propertyId", element: <IpswichPropertyDetailsPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/careers/assistant-property-manager", element: <AssistantPropertyManagerPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/terms-conditions", element: <TermsConditionPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
);
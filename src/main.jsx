import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import NavBar from './components/NavBar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Loader from './components/Loader.jsx';

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
import GoldCoastPropertyDetailsPage from './pages/GoldCoast/GoldCoastPropertyDetailsPage.jsx';
import MoretonBayPropertyDetailsPage from './pages/MoretonBay/MoretonBayPropertyDetailsPage.jsx';
import LeasedPropertyPage from './pages/LeasedProperty.jsx';
const BrisbanePropertyDetailsPage = lazy(() => import("./pages/Brisbane/BrisbanePropertyDetailsPage.jsx"));
const IpswichPropertyDetailsPage = lazy(() => import("./pages/Ipswich/IpswichPropertyDetailsPage.jsx"));
const LoganPropertyDetailsPage = lazy(() => import("./pages/Logan/LoganPropertyDetailsPage.jsx"));
const AssistantPropertyManagerPage = lazy(() => import("./pages/AssistantPropertyManager.jsx"));
const GoldCoastPropertyPortfolioDetailsPage = lazy(() => import('./pages/GoldCoast/GoldCoastPropertyPortfolioDetailsPage.jsx'));
const BrisbanePropertyPortfolioDetailsPage = lazy(() => import('./pages/Brisbane/BrisbanePropertyPortfolioDetailsPage.jsx'));
const IpswichPropertyPortfolioDetailsPage = lazy(() => import('./pages/Ipswich/IpswichPropertyPortfolioDetailsPage.jsx'));
const MoretonBayPropertyPortfolioDetailsPage = lazy(() => import('./pages/MoretonBay/MoretonBayPropertyPortfolioDetailsPage.jsx'));
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
      { path: "/portfolio/gold-coast/properties/:propertyId", element: <GoldCoastPropertyPortfolioDetailsPage /> },
      { path: "/portfolio/brisbane/properties/:propertyId", element: <BrisbanePropertyPortfolioDetailsPage /> },
      { path: "/portfolio/ipswich/properties/:propertyId", element: <IpswichPropertyPortfolioDetailsPage /> },
      { path: "/portfolio/moreton-bay/properties/:propertyId", element: <MoretonBayPropertyPortfolioDetailsPage /> },
      { path: "/rentals", element: <LocationsPage /> },
      { path: "/rentals/gold-coast/properties/:propertyId", element: <GoldCoastPropertyDetailsPage /> },
      { path: "/rentals/brisbane/properties/:propertyId", element: <BrisbanePropertyDetailsPage /> },
      { path: "/rentals/ipswich/properties/:propertyId", element: <IpswichPropertyDetailsPage /> },
      { path: "/rentals/logan/properties/:propertyId", element: <LoganPropertyDetailsPage /> },
      { path: "/rentals/moreton-bay/properties/:propertyId", element: <MoretonBayPropertyDetailsPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/careers/assistant-property-manager", element: <AssistantPropertyManagerPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/terms-conditions", element: <TermsConditionPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/leased-property",
    element: <LeasedPropertyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router}>
            <ScrollToTop />
          </RouterProvider>
        </Suspense>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
);
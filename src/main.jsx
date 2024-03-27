import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import HomePage from"./pages/HomePage.jsx";
import AboutPage from"./pages/AboutPage.jsx";
import ContactPage from"./pages/ContactPage.jsx";


import NavBar from './components/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path:"/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      // { path: "/project/:id", element: <ProjectPage /> },
      // { path: "/project/:id/update", element: <UpdateProject /> },
      // { path: "/profile", element: <ProfilePage /> },
      // { path: "/create-project", element: <CreateProject /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
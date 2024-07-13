import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Route from './Routes/Route.jsx'
import Contact from './components/Contact/Contact.jsx'
import Contactme from './components/Header/Contactme/Contactme.jsx'


const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Route />,

      children: [
        {
          path: "About",
          element: <About />,

        },
        {
          path: "",
          element: <Home />,

        },
        {
          path: "Contact",
          element: <Contact />,

        },
        {
          path: "Contactme",
          element: <Contactme />,

        },
      ],
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)

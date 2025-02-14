import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import { RouterProvider } from "react-router-dom";
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


// const Router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contactus",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router} />
  </StrictMode>,
)

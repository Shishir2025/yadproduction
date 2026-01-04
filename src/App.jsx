import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainOutlet from './components/mainOutlet/MainOutlet'
import Home from './components/pages/Home.jsx/Home'
import Error from './components/errorLoadPage/Error'

const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainOutlet />,
      errorElement: <Error />,
      children: [{
        index: true,
        element: <Home />
      }]
    }
  ])



  return (

    <RouterProvider router={router} />
  )
}

export default App
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './components/Register/Login';
import Register from './components/Register/Register';
import Navbar from './components/Global/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

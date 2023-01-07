import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import all pages */
import Username from './pages/Username';
import Password from './pages/Password';
import Register from './pages/Register';
import Recovery from './pages/Recovery';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Room from './pages/Room';
import Reset from './pages/Reset';
import PageNotFound from './pages/PageNotFound';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Username></Username>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/password',
    element : <ProtectRoute><Password /></ProtectRoute>
  },
  {
    path : '/recovery',
    element : <Recovery></Recovery>
  },
  {
    path : '/profile',
    element : <AuthorizeUser><Profile /></AuthorizeUser>
  },
  {
    path : '/home',
    element : <AuthorizeUser><Home></Home></AuthorizeUser>
  },
  {
    path : "/room/:roomID",
    element : <AuthorizeUser><Room></Room></AuthorizeUser>
  },
  {
    path : '/reset',
    element : <Reset></Reset>
  },
  {
    path : '*',
    element : <PageNotFound></PageNotFound>
  },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
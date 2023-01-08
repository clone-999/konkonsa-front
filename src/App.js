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
import { AuthorizeUser, ProtectRoute, RedirectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <RedirectRoute><Username></Username></RedirectRoute>
  },
  {
    path : '/register',
    element : <RedirectRoute><Register></Register></RedirectRoute>
  },
  {
    path : '/password',
    element : <ProtectRoute><Password /></ProtectRoute>
  },
  {
    path : '/recovery',
    element : <RedirectRoute><Recovery></Recovery></RedirectRoute>
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
    element : <RedirectRoute><Reset></Reset></RedirectRoute>
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
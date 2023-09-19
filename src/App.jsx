import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home'
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import Blog from './pages/Blog';
import Login from './pages/Login';

import MainLayout from './components/layout/MainLayout';
import FootlessLayout from './components/layout/FootlessLayout';
import AnimeDetail from './pages/AnimeDetail';
import AuthRoute from './components/AuthRoute';
import GuestRoute from './components/GuestRoute';

const routes = [
  {
    path: '/',
    element: Home,
    layout: MainLayout,
  },
  {
    path: '/contact',
    element: Contact,
    layout: MainLayout,
  },
  {
    path: '/blog',
    element: Blog,
    layout: FootlessLayout,
  },
  {
    path: '/anime-detail/:id',
    element: AnimeDetail,
    layout: MainLayout,
    auth: AuthRoute
  },
  {
    path: '/login',
    element: Login,
    auth: GuestRoute
  },
  {
    path: '*',
    element: Page404,
    layout: FootlessLayout,
  },
]

function App() {

  return (
    <>
      <Routes>
        {routes.map((route, indexRoute) => {
          const Layout = route.layout || React.Fragment;
          const Component = route.element || React.Fragment;
          const AuthComponent = route?.auth || React.Fragment;
          
          return (
            <Route 
              key={indexRoute}
              path={route.path} 
              element={
                <AuthComponent>
                  <Layout>
                    <Component />
                  </Layout>
                </AuthComponent>
              } 
            />
          )
        })}




        {/* <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/blog" element={<FootlessLayout><Blog /></FootlessLayout>} />
        <Route path="*" element={<FootlessLayout><Page404 /></FootlessLayout>} /> */}
      </Routes>
    </>
  )
}

export default App

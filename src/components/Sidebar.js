import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './utils/Layout';
import Dashboard from './Dashboard';
import Report from './Report';
import Navigator from './Navigator';
import About from './About/Index';

const Sidebar = () => {
  return (
    <div className='flex'>
      <Navigator />
      <Layout>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='report' element={<Report />} />
          <Route exact path='about' element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Sidebar;

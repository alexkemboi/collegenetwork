"use client"
import React, { useState } from 'react';
import Login from './components/login/page';
import Signup from './components/signup/page';
import Dashboard from './components/dashboard/page';
import SideBarComponent from './components/SideBarContainer';
import Layout from './layouts';

const mlms: React.FC = () => {

  return (
    <>
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
};

export default mlms;

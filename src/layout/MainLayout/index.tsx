import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div id="container">
      <header className='header'>
        <Header />
      </header>
      <main>
        <Outlet /> 
      </main>
        <Footer/>
    </div>
  );
}

export default MainLayout;

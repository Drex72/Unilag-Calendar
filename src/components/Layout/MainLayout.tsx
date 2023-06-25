import React from 'react'
import Header from '../Header/Header'


const MainLayout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
      <div className="pt-3 w-full p-10 h-screen overflow-y-scroll animate__animated animate__fadeIn">
        <Header />
        {Array.isArray(children) ? children : [children]}
      </div>
    );
  };
  
export default MainLayout
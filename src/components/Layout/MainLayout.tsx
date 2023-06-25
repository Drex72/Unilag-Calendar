import React from "react";
import Header from "../Header/Header";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className=" pt-3 p-10 h-6/5 overflow-y-scroll animate__animated animate__fadeIn w-full">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;

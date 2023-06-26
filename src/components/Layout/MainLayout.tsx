import React from "react";
import Header from "../Header/Header";

const MainLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="ml-[210px] w-[100vw-250px] overflow-x-scroll pt-3  p-10 min-h-screen overflow-y-scroll animate__animated animate__fadeIn">
      <Header />
      {Array.isArray(children) ? children : [children]}
    </div>
  );
};

export default MainLayout;

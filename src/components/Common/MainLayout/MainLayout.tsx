import React from "react";
import MainHeader from "./MainHeader";

type AppLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default MainLayout;

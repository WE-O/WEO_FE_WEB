import React from "react";
import MainHeader from "./MainHeader";
import { ModalContainer } from "../../Modal";

type AppLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <ModalContainer />
      <MainHeader />
      {children}
    </>
  );
};

export default MainLayout;

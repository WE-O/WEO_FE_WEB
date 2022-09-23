import React, { useEffect } from "react";
import Router from "next/router";

type Props = {};
const Index: React.FC<Props> = () => {
  useEffect(() => {
    Router.push("/main", "/main");
  }, []);
  return <div />;
};

export default Index;

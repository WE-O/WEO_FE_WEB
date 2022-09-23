import React, { useEffect } from "react";
import Router from "next/router";

type Props = {};
const Index: React.FunctionComponent<Props> = () => {
  useEffect(() => {
    Router.push("/main", "http://localhost:3000/main");
  }, []);
  return <div />;
};

export default Index;

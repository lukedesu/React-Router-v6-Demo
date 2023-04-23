import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;

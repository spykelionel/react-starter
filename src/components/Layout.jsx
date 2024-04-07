import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

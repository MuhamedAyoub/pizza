import { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;

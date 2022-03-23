import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/ui/Header";

const Wrapper = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Wrapper;

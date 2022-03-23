import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Wrapper from "./Wrapper";

const AppRoute = () => {
  return (
    <Routes>
          <Route element={<Wrapper />}>
            <Route path="/" element={<Home />} />
          </Route>
    </Routes>
  )
}

export default AppRoute
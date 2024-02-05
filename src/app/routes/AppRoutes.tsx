import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Roles from "../../pages/Roles";
import { PATHS } from "../../helpers/constants";
import Favorite from "../../pages/Favorite";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.ROLES} element={<Roles />} />
      <Route path={PATHS.NEWS} element={<News />} />
      <Route path={PATHS.FAVORITE} element={<Favorite />} />
    </Routes>
  );
};

export default AppRoutes;

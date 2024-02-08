import { FC } from "react";

import Categories from "../../feuteres/Categories";
import Slider from "../../feuteres/Slider";

const NewsFilters: FC = () => {
  return (
    <Slider step={150}>
      <Categories />
    </Slider>
  );
};

export default NewsFilters;

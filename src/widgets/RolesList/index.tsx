import { FC } from "react";
import { observer } from "mobx-react-lite";

import RolesItem from "../RolesItem";
import Spinner from "../Spinner";
import styles from "./styles.module.scss";
import { IRoles } from "../../interfaces";

interface RolesListProps {
  items?: IRoles[];
  isLoading: boolean;
}

export const formatCompactNum = (num: number) => {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  return formatter.format(num);
};

const RolesList: FC<RolesListProps> = observer(({ isLoading, items }) => {
  return !isLoading ? (
    <ul className={styles.roles__list}>
      {items?.map((item) => {
        return (
          <li className={styles.roles__item} key={item.id}>
            <RolesItem
              url={`https://youtube.com/watch?v=${item.id}`}
              width={"100%"}
              height={"85vh"}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <Spinner />
  );
});

export default RolesList;

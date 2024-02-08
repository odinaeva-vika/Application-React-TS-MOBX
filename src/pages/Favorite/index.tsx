import { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import FavoriteList from "../../widgets/FavoriteList";

const Favorite: FC = observer(() => {
  return (
    <section className={styles.favorite}>
      <FavoriteList />
    </section>
  );
});

export default Favorite;

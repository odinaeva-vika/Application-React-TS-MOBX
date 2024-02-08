import { FC } from "react";
import styles from "./styles.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.title}>
        Использованные технологии:{" "}
        <span> React + TypeScript + MobX + Vite</span>.
      </h2>
      <h4 className={styles.title}>Реализованные фичи:</h4>
      <ul className={styles.list}>
        <li>Поиск по API News</li>
        <li>Фильтрация по категориям API News</li>
        <li>Добавление в избранное</li>
        <li>Механизм устранения дребезга</li>
        <li>Роутер</li>
        <li>Локальное хранилище</li>
        <li>Axios</li>
        <li>Mui Material Icons</li>
        <li>React Player</li>
      </ul>

      <div>
        <h4 className={styles.title}>Примечание: хук useDebounce</h4>
        <p className={styles.description}>
          В проекте использован хук useDebounce, так как этот механизм позволяет
          отложить запрос до момента окончания ввода данных.
        </p>
        <h4 className={styles.title}>Примечание: Страница с Роликами</h4>
        <p className={styles.description}>
          В проекте была задача показать работу с React Player, на самом деле,
          чтобы в консоле не выводились ошибки, нужно использовать YouTube
          Player API.
        </p>
      </div>
    </div>
  );
};

export default Home;

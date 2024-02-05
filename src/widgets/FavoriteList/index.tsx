import { FC } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import NewsStore from "../../stores/NewsStore";
import FavoriteBtn from "../../feuteres/FavoriteBtn";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const FavoriteList: FC = observer(() => {
  return (
    <ul className={styles.news}>
      {NewsStore.favoriteNews.map((item) => {
        return (
          <li key={item.id}>
            <a
              href={item.url}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              className={styles.news__link}
            >
              <div className={styles.news__box}>
                <img
                  className={styles.news__img}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className={styles.news__wrapper}>
                <div className={styles.news__info}>
                  <h3 className={styles.news__name}>{item.author}</h3>
                  <p className={styles.news__time}>
                    {formatTimeAgo(item.published)}
                  </p>
                </div>
                <div className={styles.news__content}>
                  <h4 className={styles.news__title}>{item.title}</h4>
                  <p className={styles.news__description}>{item.description}</p>
                </div>
              </div>
              <FavoriteBtn
                onClick={() => NewsStore.toggleFavorites(item)}
                isFavorite={NewsStore.favoriteNews.some(
                  (favorite) => favorite.id === item.id
                )}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
});

export default FavoriteList;

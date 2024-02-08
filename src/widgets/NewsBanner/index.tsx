import { FC } from "react";
import { observer } from "mobx-react-lite";

import styles from "./styles.module.scss";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import FavoriteBtn from "../../feuteres/FavoriteBtn";
import NewsStore from "../../stores/NewsStore";

interface NewsBannerProps {
  items?: INews[];
}

const NewsBanner: FC<NewsBannerProps> = observer(({ items }) => {
  return (
    <ul className={styles.banner}>
      {items?.slice(0, 2).map((item) => {
        return (
          <li key={item.id} className={styles.banner__item}>
            <a
              href={item.url}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              className={styles.banner__link}
            >
              <div className={styles.banner__btn}>
                <FavoriteBtn
                  onClick={() => NewsStore.toggleFavorites(item)}
                  isFavorite={NewsStore.favoriteNews.some(
                    (favorite) => favorite.id === item.id
                  )}
                />
              </div>
              <div className={styles.banner__box}>
                <img
                  className={styles.banner__img}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className={styles.banner__container}>
                <div className={styles.banner__info}>
                  <h3 className={styles.banner__name}>{item.author}</h3>
                  <p className={styles.banner__time}>
                    {formatTimeAgo(item.published)}
                  </p>
                </div>
                <div className={styles.banner__content}>
                  <h4 className={styles.banner__title}>{item.title}</h4>
                  <p className={styles.banner__description}>
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
});

export default withSkeleton(/* <NewsBannerProps> */ NewsBanner, 2, "banner");

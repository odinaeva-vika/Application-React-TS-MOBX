import { FC } from "react";
import { observer } from "mobx-react-lite";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import styles from "./styles.module.scss";
import NewsStore from "../../stores/NewsStore";
import FavoriteBtn from "../../feuteres/FavoriteBtn";

interface NewsListProps {
  items?: INews[];
}

const NewsList: FC<NewsListProps> = observer(({ items }) => {
  return (
    <ul className={styles.list}>
      {items?.slice(2).map((item) => {
        return (
          <li key={item.id}>
            <a
              href={item.url}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              className={styles.list__link}
            >
              <h3 className={styles.list__name}>{item.author}</h3>
              <h4 className={styles.list__title}>{item.title}</h4>

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

export default withSkeleton(/* <Props> */ NewsList, 30, "item");

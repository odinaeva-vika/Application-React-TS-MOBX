import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";

import NewsList from "../../widgets/NewsList";
import NewsStore from "../../stores/NewsStore";
import NewsFilters from "../../widgets/NewsFilters";
import NewsBanner from "../../widgets/NewsBanner";

const News: FC = observer(() => {
  useEffect(() => {
    if (NewsStore.category !== "" || NewsStore.keywords !== "") {
      const timeoutId = setTimeout(() => {
        NewsStore.getNewsAction(NewsStore.category, NewsStore.keywords);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
    NewsStore.getNewsAction(NewsStore.category, NewsStore.keywords);
  }, [NewsStore.category, NewsStore.keywords]);

  return (
    <section className={styles.news}>
      <NewsFilters />
      <h2 className={styles.news__title}>
        {!NewsStore.category ? "All" : NewsStore.category}
      </h2>

      <div className={styles.news__box}>
        <NewsBanner isLoading={NewsStore.isLoading} items={NewsStore.news} />
        <NewsList isLoading={NewsStore.isLoading} items={NewsStore.news} />
      </div>
    </section>
  );
});

export default News;

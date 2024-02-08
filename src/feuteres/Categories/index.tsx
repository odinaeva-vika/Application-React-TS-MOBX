import { observer } from "mobx-react-lite";
import { FC, ForwardedRef, useEffect } from "react";
import { forwardRef } from "react";
import NewsStore from "../../stores/NewsStore";
import styles from "./styles.module.scss";

const Categories: FC = observer(
  forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    useEffect(() => {
      NewsStore.getCategoriesAction();
    }, []);

    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => NewsStore.handleCategory("")}
          className={
            !NewsStore.category
              ? `${styles.category__btn} ${styles.active}`
              : styles.category__btn
          }
        >
          All
        </button>

        {NewsStore.categories?.map((category) => {
          return (
            <button
              key={category}
              onClick={() => NewsStore.handleCategory(category)}
              className={
                NewsStore.category === category
                  ? `${styles.category__btn} ${styles.active}`
                  : styles.category__btn
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  })
);

Categories.displayName = "Categories";

export default Categories;

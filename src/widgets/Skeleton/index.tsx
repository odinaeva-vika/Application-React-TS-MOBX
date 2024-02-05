import styles from "./styles.module.scss";
import { FC } from "react";
import { SkeletonType } from "../../interfaces";

export interface Props {
  type?: SkeletonType;
  count?: number;
}

const Skeleton: FC<Props> = ({ count = 2, type = "banner" }) => {
  return (
    <>
      <ul className={styles.skeleton}>
        {[...Array(count)].map((_, index) => (
          <li
            key={index}
            className={
              type === "banner"
                ? styles.skeleton__banner
                : styles.skeleton__item
            }
          ></li>
        ))}
      </ul>
    </>
  );
};

export default Skeleton;

import { CircularProgress } from "@mui/material";
import styles from "./styles.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <CircularProgress size={30} />
    </div>
  );
};
export default Spinner;

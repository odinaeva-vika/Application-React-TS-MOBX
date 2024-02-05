import { FC } from "react";
import styles from "./styles.module.scss";
import Logo from "../../app/assets/logo.svg";
import Search from "../../feuteres/Search";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();

  const isNewsPage = location.pathname === "/news";

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Link to={"/"} className={styles.header__logo}>
            <img src={Logo} alt="Приложение" />
            <span>Приложение</span>
          </Link>
          <div className={styles.header__box}>{isNewsPage && <Search />}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

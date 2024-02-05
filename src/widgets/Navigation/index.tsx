import { FC } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../helpers/constants";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

type NavItem = {
  to: string;
  icon: JSX.Element;
  label: string;
};

const Navigation: FC = () => {
  const navItems: NavItem[] = [
    {
      to: PATHS.HOME,
      icon: <HomeIcon color="primary" sx={{ fontSize: 30 }} />,
      label: "Главная",
    },
    {
      to: PATHS.ROLES,
      icon: <PlayCircleOutlineIcon color="primary" sx={{ fontSize: 30 }} />,
      label: "Ролики",
    },
    {
      to: PATHS.NEWS,
      icon: <NewspaperIcon color="primary" sx={{ fontSize: 30 }} />,
      label: "Новости",
    },
    {
      to: PATHS.FAVORITE,
      icon: <BookmarkBorderIcon color="primary" sx={{ fontSize: 30 }} />,
      label: "Сохраненное",
    },
  ];

  return (
    <nav>
      <ul className={styles.nav__list}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.nav__item}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav__link} ${styles.active}`
                  : styles.nav__link
              }
            >
              {item.icon}
              <p>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

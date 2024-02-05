import { observer } from "mobx-react-lite";
import { FC } from "react";

import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface FavoriteBtnProps {
  onClick: () => void;
  isFavorite: boolean;
}

const FavoriteBtn: FC<FavoriteBtnProps> = observer(
  ({ onClick, isFavorite }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
    };

    return (
      <IconButton onClick={handleClick} color="primary" aria-label="Favorite">
        {!isFavorite ? (
          <BookmarkBorderIcon sx={{ fontSize: 40 }} />
        ) : (
          <BookmarkIcon sx={{ fontSize: 40 }} />
        )}
      </IconButton>
    );
  }
);

export default FavoriteBtn;

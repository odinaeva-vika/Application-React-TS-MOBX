import { FC } from "react";
import { observer } from "mobx-react-lite";
import NewsStore from "../../stores/NewsStore";
import TextField from "@mui/material/TextField";

const Search: FC = observer(() => {
  return (
    <div>
      <TextField
        value={NewsStore.keywords}
        onChange={NewsStore.handleSearch}
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        size="small"
      />
    </div>
  );
});

export default Search;

import { FC } from "react";
import { observer } from "mobx-react-lite";
import NewsStore from "../../stores/NewsStore";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

const Search: FC = observer(() => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "300px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-search"
          value={NewsStore.keywords}
          onChange={NewsStore.handleSearch}
          label="Поле поиска"
          type="search"
          size="small"
        />
      </div>
    </Box>
  );
});

export default Search;

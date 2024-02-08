import { FC } from "react";
import { observer } from "mobx-react-lite";
import NewsStore from "../../stores/NewsStore";

const Search: FC = observer(() => {
  return (
    <div>
      <input
        type="text"
        value={NewsStore.keywords}
        onChange={NewsStore.handleSearch}
      />
    </div>
  );
});

export default Search;

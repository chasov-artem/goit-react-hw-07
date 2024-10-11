import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeSearch } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterValue = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label className={styles.searchLabel}>Find contacts by name:</label>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(changeSearch(e.target.value))}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;

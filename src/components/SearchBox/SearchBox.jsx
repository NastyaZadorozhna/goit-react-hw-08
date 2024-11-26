import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchContainer}>
      <span style={{ fontSize: "20px", marginBottom: "5px" }}>
        Find contacts
      </span>
      <input
        className={styles.searchInput}
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filter}
        onChange={(evt) => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;
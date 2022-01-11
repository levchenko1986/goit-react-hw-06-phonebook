import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contactsFilter";
import { changeFilter } from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="contact"
        autoComplete="on"
      />
    </label>
  );
};

export default Filter;

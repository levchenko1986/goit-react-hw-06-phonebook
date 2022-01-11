import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contactsFilter";
import { deleteContact } from "../../redux/contacts/contactsActions";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContacts = (id) => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li className={styles.item} key={id}>
            {name}: {phone}
            <button
              type="button"
              className={styles.button}
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

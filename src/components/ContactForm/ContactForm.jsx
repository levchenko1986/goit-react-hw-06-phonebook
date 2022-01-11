import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../redux/contacts/contactsFilter";
import { addContact } from "../../redux/contacts/contactsActions";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [stateName, setStateName] = useState("");
  const [stateNumber, setStateNumber] = useState("");

  const handleInputChangeName = (event) => {
    setStateName(event.target.value);
  };

  const handleInputChangeNumber = (event) => {
    setStateNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === stateName.toLowerCase()
      )
    ) {
      return alert(`${stateName} is already in contacts`);
    }

    dispatch(addContact(stateName, stateNumber));
    setStateName("");
    setStateNumber("");
  };

  ContactForm.propTypes = {
    stateName: PropTypes.string.isRequired,
    stateNumber: PropTypes.string.isRequired,
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          className={styles.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={stateName}
          onChange={handleInputChangeName}
          placeholder="Name"
          autoComplete="on"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          className={styles.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={stateNumber}
          onChange={handleInputChangeNumber}
          placeholder="Number"
          autoComplete="on"
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

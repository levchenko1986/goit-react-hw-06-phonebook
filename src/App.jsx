import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.css";

export default function App() {
  return (
    <Container>
      <h1 className={styles.title__phonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title__contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

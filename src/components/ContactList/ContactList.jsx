import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contacts.length === 0) {
    return <p>Немає контактів для відображення.</p>;
  }

  return (
    <ul className={styles.contactList}>
      {filteredData.map((item) => (
        <li key={item.id} className={styles.contactItem}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

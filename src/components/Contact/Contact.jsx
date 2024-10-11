import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { IoAccessibility, IoCall } from "react-icons/io5";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cardWrap}>
      <div className={styles.textWrap}>
        <span className={styles.name}>
          <IoAccessibility />
          {name}
        </span>
        <span className={styles.number}>
          <IoCall />
          {number}
        </span>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

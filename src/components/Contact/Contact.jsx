import { useState } from "react";
import styles from "./Contact.module.css";
import Modal from "../Modal/Modal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    onModalOpen();
  };

  return (
    <div className={styles.contactConteiner}>
        <p><span className={styles.contactName}></span>{name}</p>
        <p><span className={styles.contactPhone}></span>{number}</p>
      <button className={styles.deleteButton} type="button" onClick={handleClick}>Delete</button>
      {isModalOpen && <Modal id={id} onModalClose={onModalClose} />}
    </div>
  );
};

export default Contact;
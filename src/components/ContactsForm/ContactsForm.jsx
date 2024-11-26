import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactsForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { validationContactsSchema } from "../../utils/schemas";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  return (
    <div className={styles.contactFormContainer}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationContactsSchema}
    >
      <Form className={styles.form}>
        <label >
          <Field
            className={styles.input}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name"
          />
      
        </label>
        <label >
          <Field
            className={styles.input}
            type="text"
            name="number"
            autoComplete="off"
            placeholder="+380XXXXXXXXX"
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
    </div>
  );
};

export default ContactForm;
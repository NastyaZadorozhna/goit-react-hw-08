import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";


const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });


  return (
    <div className={styles.registerContainer}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <label className={styles.formLabel}>
          Name
          <Field
            type="text"
            name="name"
            className={styles.formField}
            placeholder="Enter your name..."
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={styles.formLabel}>
          Email
          <Field
            type="text"
            name="email"
            className={styles.formField}
            placeholder="Enter email..."
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={styles.formLabel}>
          Password
          <Field
            type="password"
            name="password"
            className={styles.formField}
            placeholder="Enter password..."
          />
          <ErrorMessage
            className={styles.errorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          Register
        </button>
      </Form>
    </Formik>
    </div>

  );
};

export default RegistrationForm;
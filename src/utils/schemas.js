import * as Yup from "yup";

export const validationContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols")
    .max(20, "Name must be less than 20 symbols")
    .required("Required"),
  number: Yup.string().required("Number is required!"),
});

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 7 symbols")
    .max(15, "Password must be the most 15 symbols")
    .required("Required"),
});

export const validationRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols")
    .max(20, "Name must be less than 20 symbols")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symbols")
    .required("Required"),
});
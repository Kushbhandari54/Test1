import * as yup from "yup";
import { EMAIL_VALIDATION } from "../../config/Regex";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(EMAIL_VALIDATION, "Enter valid email"),
  password: yup.string().required("Password is required"),
});

export const initialValues = {
  email: "",
  pass: "",
};

export const validate = (values) => {
  const errors = {};
  if (!values?.email) {
    errors.email = "Email is required";
  }
  if (values?.email && !EMAIL_VALIDATION.test(values?.email?.toLowerCase())) {
    errors.email = "Not a valid Email";
  }
  if (!values?.pass) {
    errors.pass = "Password is required";
  }
  return errors;
};

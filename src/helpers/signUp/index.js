import {
    EMAIL_VALIDATION,
    SPECIAL_CHAR_PATTERN,
    NUMBER_PATTERN,
    LOWERCASE_PATTERN,
    UPPERCASE_PATTERN,
    PHONE_VALIDATION,
  } from "../../config/Regex";
  import * as yup from "yup";
  
  export const userInfoSchema = yup.object().shape({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .matches(EMAIL_VALIDATION, "Please enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "At least 8 characters required")
      .matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
      .matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
      .matches(NUMBER_PATTERN, "Password must contain a number")
      .matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character"),
    confirmPassword: yup
      .string()
      .required("You need to confirm the password")
      .oneOf([yup.ref("password"), null], "These passwords do not match"),
    phno: yup
      .string()
      .length(10, "Phone Number must be 10 of digits")
      .matches(PHONE_VALIDATION, "Enter valid phone number"),
  });
  
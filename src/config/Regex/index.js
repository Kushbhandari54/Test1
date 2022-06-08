/* eslint-disable no-useless-escape */
export const EMAIL_VALIDATION = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

export const UPPERCASE_PATTERN = /[A-Z]/;

export const LOWERCASE_PATTERN = /[a-z]/;

export const NUMBER_PATTERN = /[0-9]/;

export const SPECIAL_CHAR_PATTERN = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

export const PHONE_VALIDATION =
  /^(\+1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/;

import * as yup from "yup";

const regex = {
  code: /\w+\d+/gi,
  eightCharsPass: /^.{8,}$/gm,
  oneNumberPass: /^(?=.*\d).{8,}$/gm,
  oneLowerCharPass: /^(?=.*\d)(?=.*[a-z]).{8,}$/gm,
  oneUpperCharPass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
};

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("validation.required"),
  lastName: yup.string().required("validation.required"),
  email: yup.string().required("validation.required").email("validation.email"),
  code: yup
    .string()
    .required("validation.required")
    .matches(regex.code, "validation.code"),
  password: yup
    .string()
    .required("validation.required")
    .matches(regex.eightCharsPass, "validation.eightCharsPass")
    .matches(regex.oneNumberPass, "validation.oneNumberPass")
    .matches(regex.oneLowerCharPass, "validation.oneLowercasePass")
    .matches(regex.oneUpperCharPass, "validation.oneUppercasePass"),
  confirmPassword: yup
    .string()
    .required("validation.required")
    .oneOf([yup.ref("password"), null], "validation.confirmPassword")
    .matches(regex.eightCharsPass, "validation.eightCharsPass")
    .matches(regex.oneNumberPass, "validation.oneNumberPass")
    .matches(regex.oneLowerCharPass, "validation.oneLowercasePass")
    .matches(regex.oneUpperCharPass, "validation.oneUppercasePass"),
});

import * as yup from "yup";

const regex = {
  code: /\w+\d+/gi,
  eightCharsPass: /^.{8,}$/gm,
  oneNumberPass: /^(?=.*\d).{8,}$/gm,
  oneLowerCharPass: /^(?=.*\d)(?=.*[a-z]).{8,}$/gm,
  oneUpperCharPass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  phoneNumber: /^(15|11|10|12)\d{8,8}$/gm,
};

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("validation.required"),
  lastName: yup.string().required("validation.required"),
  email: yup.string().required("validation.required").email("validation.email"),
  code: yup
    .string()
    .required("validation.required")
    .matches(regex.code, "validation.code"),
  phone: yup
    .string()
    .required("validation.required")
    .matches(regex.phoneNumber, "validation.phone"),
  altPhone: yup
    .string()
    .required("validation.required")
    .matches(regex.phoneNumber, "validation.phone"),
  password: yup
    .string()
    .required("validation.required")
    .matches(regex.eightCharsPass, "validation.eightCharsPass")
    .matches(regex.oneNumberPass, "validation.oneNumberPass")
    .matches(regex.oneLowerCharPass, "validation.oneLowercasePass")
    .matches(regex.oneUpperCharPass, "validation.oneUppercasePass"),
  track: yup.string().required("validation.required"),
});

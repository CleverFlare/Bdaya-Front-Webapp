import { t } from "i18next";
import * as yup from "yup";

const regex = {
  code: /\w+-\d+/gi,
  eightCharsPass: /^.{8,}$/gm,
  oneNumberPass: /^(?=.*\d).{8,}$/gm,
  oneLowerCharPass: /^(?=.*\d)(?=.*[a-z]).{8,}$/gm,
  oneUpperCharPass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
};

export const signinSchema = yup.object().shape({
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
});

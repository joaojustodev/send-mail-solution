import * as yup from "yup";
import { validatePhoneNumber } from "../utils/validatePhoneNumber";

export const contactSchema = yup.object().shape({
  name: yup.string().required("What's your name ?"),
  email: yup
    .string()
    .email("Email is invalid")
    .required("Email is required..."),
  phone: yup
    .string()
    .test("phone", "Phone is invalid", (value) => {
      if (value) {
        if (validatePhoneNumber(value)) {
          return true;
        }
      }

      return false;
    })
    .min(15, "Phone is invalid")
    .max(15, "Phone is invalid")
    .required("Phone is required"),
  subject: yup.string().required("What's subject ?"),
  message: yup.string().max(300, "Too long!").required("Say hello!"),
});

import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("What's your name ?"),
  email: yup
    .string()
    .email("This email is not valid")
    .required("Email is required..."),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Type only numbers!")
    .min(8, "Invalid phone number")
    .max(11, "Invalid phone number")
    .required("I wanna your number ❤️..."),
  subject: yup.string().required("What's subject ?"),
  message: yup.string().max(300, "Too long!").required("Say hello!"),
});

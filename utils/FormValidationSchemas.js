import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactFormValidationSchema = Yup.object({
  fullname: Yup.string()
    .required("Fullname is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets allowed "),
  email: Yup.string().required("Email is required").email("email is not valid"),
  // phonenumber: Yup.string()
  //   .required("Phone number  required")
  //   .matches(phoneRegExp, "Phone number not valid")
  //   .min(10, "Expecting 10 Digit")
  //   .max(10, "Expecting 10 Digit"),
  // message: Yup.string().required("Message is required"),
});

export const customSolutionValidationSchema = Yup.object({
  industry_name: Yup.string().required("Industry is required"),
  product_name: Yup.string().required("Product Name Is Required"),
  desc: Yup.string().required("Product Description Is Required"),
});

import * as yup from "yup";

export const ValidationSchema = yup
  .object({
    title: yup.string().required("Please fill out this field."),
    description: yup.string().required("Please fill out this field."),
    category: yup.string().required(),
    roomCount: yup.number().positive().required("Please fill out this field."),
    bathroomCount: yup
      .number()
      .positive()
      .integer()
      .required("Please fill out this field."),
    guestCount: yup
      .number()
      .positive()
      .integer()
      .required("Please fill out this field."),
    locationValue: yup.string().required("Please fill out this field."),
    price: yup
      .number()
      .positive()
      .integer()
      .required("Please fill out this field."),
    userId: yup.string().required("LoggedIn is required"),
    //imageSrc: yup.mixed().required("Image is required"),
    // imageSrc: yup.string().required("Image Upload is required"),
  })
  .required();

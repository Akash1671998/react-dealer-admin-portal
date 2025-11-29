
import * as yup from "yup";

export const dealerSchema = yup.object().shape({
  name: yup.string().required("Dealer name is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(/^[0-9]{7,15}$/, "Phone must be 7-15 digits")
    .required("Phone is required"),
  operatingHours: yup.string().required("Operating hours required"),
  status: yup.string().oneOf(["Active", "Inactive"]).required(),
});

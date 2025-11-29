
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useFormValidation(schema, options = {}) {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: options.defaultValues || {},
  });
  return methods;
}

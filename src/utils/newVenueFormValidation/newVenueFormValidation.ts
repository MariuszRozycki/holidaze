import { CreateNewVenueRequest } from "../../types/api";

type ValidationErrors = {
  name: string;
  description: string;
  price: string;
  maxGuests: string;
  [key: string]: string;
};

export const newVenueFormValidation = (
  formData: CreateNewVenueRequest,
  apiErrors: { path: string[]; message: string }[] = []
): ValidationErrors => {
  const errors: ValidationErrors = {
    name: "",
    description: "",
    price: "",
    maxGuests: "",
  };

  if (!formData.name.trim()) errors.name = "Name is required!";
  if (!formData.description.trim()) errors.description = "Description is required!";
  if (formData.price <= 0) errors.price = "Price must be greater than 0!";
  if (formData.maxGuests <= 0) errors.maxGuests = "Maximum guests must be greater than 0!";

  apiErrors.forEach((err) => {
    const fieldPath = err.path.join(".");
    errors[fieldPath] = err.message;
  });

  return errors;
};

export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.values(errors).some((error) => error !== "");
};

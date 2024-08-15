import { useState } from "react";
import { validateEmail, validateNotEmpty } from "./subscribeUtils";

export const useBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!validateNotEmpty(formData.name)) {
      formIsValid = false;
      newErrors.name = "Name is required.";
    }
    if (!validateEmail(formData.email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address.";
    }
    if (!validateNotEmpty(formData.message)) {
      formIsValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log("Form submitted:", formData);
      // Handle form submission, e.g., send data to the server
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

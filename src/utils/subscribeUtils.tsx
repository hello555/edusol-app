import { useState } from "react";

export const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const useSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Handle the form submission (e.g., send the email to the server)
      console.log("Email submitted:", email);
    }
  };

  return {
    email,
    setEmail,
    error,
    handleSubmit,
  };
};

export const validateNotEmpty = (value: string): boolean => {
  return value.trim() !== "";
};

"use client";

import { useState, useCallback } from "react";
import type { SnippetData } from "../types";

interface FormState extends SnippetData {}

const initialState: FormState = {
  title: "",
  description: "",
  expiration: "24h",
};

export const useForm = () => {
  const [formData, setFormData] = useState<FormState>(initialState);

  const updateField = useCallback((field: keyof FormState, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialState);
  }, []);

  const isValid = useCallback(() => {
    return (
      formData.title.trim().length > 0 &&
      formData.description.trim().length > 0 &&
      formData.expiration.length > 0
    );
  }, [formData]);

  const getFormErrors = useCallback(() => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      errors.description = "Content is required";
    }

    if (!formData.expiration) {
      errors.expiration = "Expiration time is required";
    }

    return errors;
  }, [formData]);

  return {
    formData,
    updateField,
    resetForm,
    isValid,
    getFormErrors,
  };
};

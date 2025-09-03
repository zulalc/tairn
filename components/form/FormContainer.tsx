"use client";

import { toast } from "sonner";
import { useEffect } from "react";
import { useActionState } from "react";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
  onSuccess,
}: {
  action: actionFunction;
  children: React.ReactNode;
  onSuccess?: () => void;
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast(state.message);
      onSuccess?.();
    }
  }, [state.message, onSuccess]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;

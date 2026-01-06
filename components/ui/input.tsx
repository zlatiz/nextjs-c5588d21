import React from "react";

type InputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
};

export default function Input({ id, name, placeholder }: InputProps): JSX.Element {
  return (
    <input id={id} name={name} placeholder={placeholder} className="border border-border rounded-md px-3 py-2 w-full" />
  );
}

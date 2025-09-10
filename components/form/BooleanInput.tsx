"use client";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

type BooleanInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};
export function BooleanInput({
  name,
  label,
  defaultChecked = true,
}: BooleanInputProps) {
  return (
    <div className="flex items-center gap-2">
      <Switch id={name} name={name} defaultChecked={defaultChecked} />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );
}

export default BooleanInput;

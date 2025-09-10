import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="gap-2">
      <Label htmlFor={name} className="block mb-2 font-medium">
        {label || name}
      </Label>
      <Input
        id={name}
        type={type}
        name={name}
        className="w-full border rounded-md p-2"
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;

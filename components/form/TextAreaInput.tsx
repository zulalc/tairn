import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

function TextAreaInput({
  name,
  labelText,
  defaultValue,
  placeholder,
  required,
}: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="leading-loose"
      />
    </div>
  );
}

export default TextAreaInput;

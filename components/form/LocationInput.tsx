"use client";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Location = "ONLINE" | "IN_PERSON" | "HYBRID";

type LocationInputProps = {
  name: string;
  label: string;
  defaultValue?: Location;
};
export function LocationInput({
  name,
  label,
  defaultValue = "ONLINE",
}: LocationInputProps) {
  return (
    <div className="flex flex-col">
      <Label className="block mb-2 font-medium">{label}</Label>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select a location type" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ONLINE">Online</SelectItem>
          <SelectItem value="IN_PERSON">In Person</SelectItem>
          <SelectItem value="HYBRID">Hybrid</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LocationInput;

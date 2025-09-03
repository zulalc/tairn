import { Label } from "../ui/label";

function ImageInput() {
  const name = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="mb-1 block text-sm font-medium">
        Profile Image
      </Label>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        className="block w-full rounded-md border border-gray-300 bg-white p-2 text-sm shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
    </div>
  );
}

export default ImageInput;

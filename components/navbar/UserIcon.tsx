import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

async function UserIcon() {
  const image = await fetchProfileImage();
  if (!image)
    return (
      <FaRegUserCircle className="w-4 h-4 bg-primary rounded-full text-white" />
    );

  return (
    <Image
      src={image}
      alt="User profile"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full object-cover"
    />
  );
}

export default UserIcon;

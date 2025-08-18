import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/tairnlogo.png"
        alt="Logo"
        width={150}
        height={150}
        className="h-12 w-auto "
      />
    </Link>
  );
}

export default Logo;

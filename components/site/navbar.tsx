import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full text-[#838383] text-[14px]">
      <div className="flex items-center gap-2">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
        </div>
        <Link
          href="/projects"
          className="hover:text-primary hover:bg-[#FFFFFF26] px-2 py-1 rounded-md"
        >
          Projects
        </Link>
        <Link
          href="/builders"
          className="hover:text-primary hover:bg-[#FFFFFF26] px-2 py-1 rounded-md"
        >
          Builders
        </Link>
        <Link
          href="/partner"
          className="hover:text-primary hover:bg-[#FFFFFF26] px-2 py-1 rounded-md"
        >
          Partner with Us
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="/register"
          className="hover:text-primary hover:bg-[#FFFFFF26] px-2 py-1 rounded-md"
        >
          Create Account
        </Link>
        <Link
          href="/login"
          className="hover:text-primary hover:bg-[#FFFFFF26] px-2 py-1 rounded-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

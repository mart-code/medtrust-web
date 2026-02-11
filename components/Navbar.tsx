import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-360 flex justify-between items-center mt-8 p-8 mx-auto bg-white rounded-full shadow-md">
        <a href="" className="font-bold text-2xl text-slate-800">MedTrust</a>
        <nav>
          <ul className=" flex gap-8">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
           
          </ul>
        </nav>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;

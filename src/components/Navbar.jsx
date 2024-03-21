import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 bg-[]  ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
          <img src="/images/logo.png" className="max-w-[7rem] w-full " alt="" />

          <div className="flex items-center space-x-6">
            <a href="https://t.me/smurfsol" target="_blank" className=" text-2xl text-white">
              <FaTelegram />
            </a>
            <a href="https://twitter.com/Smurfssol" target="_blank" className=" text-2xl text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

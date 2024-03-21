import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 bg-[]  ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
        <div className=" flex items-center">
        <img src="/images/logo.gif" className="max-w-[5rem] w-full " alt="" />
        <p className=" text-2xl font-groot-one mt-2">MinionSol</p>
        </div>

          <div className="flex items-center space-x-6">
            <a href="https://t.me/smurfsol" target="_blank" className=" text-2xl text-[#ffcc01]">
              <FaTelegram />
            </a>
            <a href="https://twitter.com/Smurfssol" target="_blank" className=" text-2xl text-[#ffcc01]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

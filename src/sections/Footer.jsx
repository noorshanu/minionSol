import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full  relative mb-[2rem]">
      <img src="images/foot.png" alt="" className=" absolute bottom-0 left-0 right-0 w-auto sm:w-[800px] mx-auto" />
      <div className="container-wrapper mt-8 ">
        <div className="flex justify-center flex-col sm:flex-row">
          <div className="mt-8 flex items-center justify-center gap-2">
          <p className="font-groot-one ">
                Copyright 2024 SmurfSol. All Rights Reserved.
              </p>

          </div>

    
        </div>
      </div>
    </footer>
  );
};

export default Footer;

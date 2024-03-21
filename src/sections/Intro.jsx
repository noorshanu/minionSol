import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 pb-[3rem] ">
   
     
    

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px] border-[#000000] border-2 rounded-2xl ">
            {/* <RoadmapCards /> */}
         
            <img
              src="images/hero2.png"
              alt=""
              className=" rounded-3xl h-auto  sm:h-[400px] mx-auto mb-4  "
            />
          

           
          </div>
          <div className=" max-w-xl">
          <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
          About Us
        </h2>
            <p className="font-semibold font-groot-one text-xl sm:text-3xl  text-black py-2">
              Welcome to the wild world of SmurfSol!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-[#000] font-medium">
            In SmurfSol world laughter meets crypto! 🚀 Dive into a world of humor, energy, and downright hilarious memes with SmurfSol - the ultimate crypto meme coin on the Solana blockchain.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-[#000] font-medium">
            SmurfSol isn't your ordinary meme coin. No siree! We're all about pumping up the fun while keeping those crypto gains rolling in. Our community thrives on spreading joy, laughter, and of course, making some serious waves in the crypto space.
            </h1>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

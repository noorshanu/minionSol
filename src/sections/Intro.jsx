import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 pb-[3rem] mt-6 ">
   
      <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
          About Us
        </h2>
    

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px]    ">
            {/* <RoadmapCards /> */}
         
            <img
              src="images/about.png"
              alt=""
              className=" rounded-3xl h-auto  sm:h-[400px] mx-auto mb-4  "
            />
          

           
          </div>
          <div className=" max-w-xl">
        
            <p className="font-semibold font-groot-one text-xl sm:text-3xl  text-black py-2">
              Welcome to the wild world of MinionSol!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one  text-[#000] font-medium">
            MinionSol, where the memes are as plentiful as bananas in a minion's lair! We're not just any old crypto meme coin – we're your loyal companions on the journey to meme greatness. 
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one   text-[#000] font-medium">
            With hearts as big as Gru's ambitions and a community as tight-knit as a group hug from a bunch of minions, you'll feel right at home with us.
            </h1>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

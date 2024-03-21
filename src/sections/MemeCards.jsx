import React from "react";
import RoadmapCards from "../components/RoadmapCards";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     
      {/* <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
      Our Products
        </h2> */}
     

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row my-2">
      
        <div className=" w-full">
            <p className=" font-groot-two text-xl sm:text-3xl text-black font-semibold  py-2">
            MinionSol isn't your average meme coin - he's the next viral meme! 
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-two text-black  font-medium">
              1. MEV BOT:
Need to whip up a meme faster than you can say "It's so fluffy I'm gonna die"? Our MEV BOT has got you covered! It's like having your own personal minion assistant,
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-two  text-black font-medium">
              2. Memes:
Get ready to laugh till your sides ache and your cheeks hurt! Our meme collection is so vast and varied, it'll make you feel like you've hit the jackpot at the Bank of Evil.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-two text-black font-medium">
              3. NFTs:
Want to own a piece of meme history? Check our NFT collection! These digital treasures are rarer than a unicorn sighting and more valuable than a golden banana.

            </h1>
       
          </div>
       

        <div className=" max-w-full sm:max-w-xl">
          <RoadmapCards/>

        </div>
      </div>
    </div>
  );
}

export default MemeCards;

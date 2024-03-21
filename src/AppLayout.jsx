import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";
import MemeCards from "./sections/MemeCards";
import Footer from "./sections/Footer";
import RoadMap from "./sections/RoadMap";

function AppLayout() {
  return (
    <>
      <main className="  bg-main ">
        <Navbar />

        <Hero />


     
      </main>
     

      <div>
        <dl className="h-[50px]" />
        <div className="bg-[#ffd60c] border-t-2 border-b-2 border-black py-8 relative">

        <Intro />
        <img src="images/enjoy.png" alt="" className=" w-full mx-auto" />
        </div>
  
       
        <div className=" bg-[#ffffff] relative z-20">
        <MemeCards />
        <img src="images/foot.png" alt="" className=" absolute bottom-0 left-0 right-0 w-auto sm:w-[800px] mx-auto -z-10" />
        </div>
        {/* <div className=" h-[100px]  py-4  mb-2 bg-[#0000005d] ">
        <MemeMark />
      </div> */}
        {/* <div>
          <RoadMap/>
        </div> */}
        {/* <div>
          <Partner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;

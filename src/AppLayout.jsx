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
        <div className="bg-[#ffffff96] border-t-2 border-b-2 border-black py-8">
        <Intro />
        </div>
  
        <dl className="h-[50px]" />
        {/* <div className=" bg-[#473314]">
        <MemeCards />
        </div> */}
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

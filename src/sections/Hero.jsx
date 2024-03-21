import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  relative ">
      <img
        src="images/hii.gif"
        alt=""
        className=" absolute left-0 top-[10%] sm:top-[45%] h-[150px] sm:h-[300px]"
      />
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-center flex-col items-center ">
            <h1 className=" font-groot-one text-lg sm:text-5xl text-center  mb-3">
              Join the{" "}
              <span className=" font-groot-one text-lg sm:text-5xl text-[#f9d059]">
                Minions !
              </span>{" "}
              Movement
            </h1>

            <div className=" w-full">
              <img
                src="images/hero3.png"
                alt=""
                className=" h-auto  mx-auto floating"
              />
            </div>
          </div>
        </div>

        <a
          href="https://solscan.io/token/EFs4aRMuDpAHEUuomM9vSdDYYfTqPYv5e2b5ZztJQrfh"
          target="_blank"
          className=" flex justify-center font-groot-two text-xs sm:text-xl text-center my-3 "
        >
          CONTRACT: EFs4aRMuDpAHEUuomM9vSdDYYfTqPYv5e2b5ZztJQrfh
        </a>

        <div className=" flex justify-center gap-4 items-center">
          <a
            href="/"
            className="font-groot-one text-2xl uppercase text-black bg-[#f9d059] border-2 border-[#000000] py-2 px-6 rounded-full"
          >
            DexTools
          </a>
          <a
            href="https://t.me/minionsoll"
            target="_blank"
            className="font-groot-one text-2xl uppercase text-black bg-[#f9d059] border-2 border-[#000000] py-2 px-6 rounded-full"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

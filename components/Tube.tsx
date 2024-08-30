"use client";
import { useEffect, useState } from "react";

const Tube = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 z-50 h-[10px] w-full  bg-[#38BDF8] transition-all duration-1000 ${
          isScrolledDown
            ? "blur-[0px] rounded-sm sticky opacity-100 transform translate-y-0"
            : "blur-[0px] left-0 right-0 opacity-0 transform -translate-y-2"
        }`}
      ></div>
      <div
        className={`sticky left-0 right-0 top-0 z-50 h-[50px] w-full  bg-[#38BDF8] transition-all duration-1000 ${
          isScrolledDown
            ? "blur-[100px] opacity-100 transform translate-y-0"
            : "blur-[0px] opacity-0 transform -translate-y-2"
        }`}
      ></div>
    </>
  );
};

export default Tube;

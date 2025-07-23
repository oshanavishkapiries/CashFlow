import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <Image 
      className="animate-pulse" 
      src="/logo.png" 
      alt="loader" 
      width={70} 
      height={70} 
    />
  );
};

export default Loader;

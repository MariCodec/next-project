import Image from "next/image";
import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h2 className="text-4xl m-3 p-4 text-custom-main">Loading...</h2>
      <div className="animate-spin">
        <Image src="/logo.png" alt="Loading" width={300} height={300} />
      </div>
    </div>
  );
};

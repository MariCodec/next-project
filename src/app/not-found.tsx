import Image from "next/image";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h2 className="text-custom-main text-4xl mt-8">Page not found</h2>
      <div>
        <Image src="/logo.png" alt="Loading" width={300} height={300} />
      </div>
    </div>
  );
}

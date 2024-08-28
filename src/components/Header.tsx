import Image from "next/image";
import React from "react";
import { Search } from "./Search";

import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

type Props = {
  onSearch: (query: string) => void;
};

export const Header: React.FC<Props> = ({ onSearch }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-full my-10 px-10 flex justify-between">
      <div className="flex-shrink-0">
        <Image src="/Rm.png" alt="header image" width={200} height={200} />
      </div>
      <div className="flex-grow m-5">
        <Search onSearch={onSearch} />
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={handleSignOut} className="flex items-center space-x-2">
          <Image
            className="rounded-full border border-text-b"
            src="/notExisting.png"
            alt="Profile image"
            width={30}
            height={30}
          />
          <h2 className="border border-text-b p-2 rounded-md bg-custom-main text-white">
            SignOut
          </h2>
        </button>
      </div>
    </div>
  );
};

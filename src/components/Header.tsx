/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";
import { Search } from "./Search";
import Link from "next/link";

type Props = {
  onSearch: (query: string) => void;
};
export const Header: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className="w-full my-10 px-10 flex justify-between">
      <div className="flex-shrink-0">
        <Image
          src="/Rm.png"
          alt="header image"
          width={200}
          height={200}
          // layout="responsive"
        />
      </div>
      <div className="flex-grow m-5">
        <Search onSearch={onSearch} />
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            className="w-14 h-14 rounded-full border  border-text-b"
            src="/notExisting.png"
            alt="Header image"
          />

          <h2 className="border  border-text-b p-2 rounded-md bg-custom-main text-white">
            {" "}
            {true ? "SignOut" : "SignIn"}
          </h2>
        </Link>
      </div>
    </div>
  );
};

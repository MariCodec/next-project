"use client";

import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { auth } from "@/src/firebase";
import { useAuthorization } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";

const Login = () => {
  const { user } = useAuthorization();
  const router = useRouter();
  const [guestName, setGuestName] = useState<string>("");
  console.log(user);
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleGuestLogin = () => {
  //   if (guestName) {
  //     localStorage.setItem("guestName", guestName);
  //     router.push("/");
  //   }

  //   if (user || guestName) {
  //     return null;
  //   }
  // };
  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-custom">
        <h1 className="text-2xl font-bold text-custom-main mb-4">
          Choose a login method
        </h1>
        <div className="flex flex-col items-center">
          <button
            onClick={googleLogin}
            className="flex items-center justify-center bg-custom-main text-white px-4 py-2 rounded-lg shadow-custom hover:bg-teal-700 transition-colors"
          >
            <Image width={40} height={40} src="/google.png" alt="Google logo" />
            <span className="ml-2">Continue with Google</span>
          </button>
          {/* <input
            type="text"
            placeholder="Enter your name"
            className="mb-4 p-2 rounded-lg text-black"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          /> */}
          {/* <button
            onClick={handleGuestLogin}
            className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-custom hover:bg-teal-700 transition-colors"
          >
            Continue as Guest
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Login;

"use client";

import { signInAnonymously, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useEffect } from "react";

import Image from "next/image";
import { auth } from "@/src/firebase";
import { useAuthorization } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";

const Login = () => {
  const { user } = useAuthorization();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      router.push("/");
    } catch (error) {
      console.error("Error logging in as guest:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-bg">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-custom">
        <h1 className="text-2xl font-bold text-custom-main mb-4">
          Choose a login method
        </h1>
        <div className="flex flex-col items-center">
          <button
            onClick={googleLogin}
            className="w-full flex items-center justify-left h-14 bg-custom-main text-white px-4 py-2 rounded-lg shadow-custom hover:bg-teal-700 transition-colors mb-4"
          >
            <Image width={40} height={40} src="/google.png" alt="Google logo" />
            <span className="ml-2">Continue with Google</span>
          </button>

          <button
            onClick={handleGuestLogin}
            className="w-full flex items-center justify-left h-14 bg-custom-main text-white px-4 py-2 rounded-lg shadow-custom hover:bg-teal-700 transition-colors"
          >
            <Image
              width={50}
              height={50}
              src="/notExisting.png"
              alt="guest logo"
            />
            <span className="ml-2">Continue as Guest</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyC0lpmAQKC75lBGRp_6PhYkzn3_KpYP_Xc",
  authDomain: "rick-morty-d6f1a.firebaseapp.com",
  projectId: "rick-morty-d6f1a",
  storageBucket: "rick-morty-d6f1a.appspot.com",
  messagingSenderId: "1085076242399",
  appId: "1:1085076242399:web:88d063ad12e56484764e6a",
  measurementId: "G-WE2YWM0WTJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

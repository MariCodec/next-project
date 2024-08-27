import { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

export const useAuthorization = () => {
  const [firebaseUser] = useAuthState(auth);
  const router = useRouter();
  console.log(JSON.stringify(firebaseUser, null, 2));

  useEffect(() => {
    if (firebaseUser)
      localStorage.setItem("user", JSON.stringify(firebaseUser));
 

 
  }, [firebaseUser, router]);

  const user = useMemo(() => {
    const localStorageUser = localStorage.getItem("user");
    return localStorageUser ? JSON.parse(localStorageUser) : firebaseUser;
  }, [firebaseUser]);

  return { user };
};

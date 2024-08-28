import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export const useAuthorization = () => {
  const [firebaseUser] = useAuthState(auth);
  const [user, setUser] = useState<any>(undefined); // Початковий стан - undefined

  useEffect(() => {
    if (firebaseUser !== undefined) {
      // Додаємо перевірку на undefined
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  }, [firebaseUser]);

  return { user };
};

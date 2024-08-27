"use client";

import { useAuthorization } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthorization();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null; 
  }

  return <>{children}</>; 
};

export default ProtectedRoute;

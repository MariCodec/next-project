"use client";

import { useAuthorization } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthorization();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      if (user === null) {
        router.push("/login");
      }
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <Loader />;
  }

  if (user === null) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

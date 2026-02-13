'use client'

import { useEffect } from "react";
import { useUserStore, type User } from "@bug-tracking-system/store";


type Props = {
  user: User | null;
};

export const AuthHydrator = ({user}: Props) => {
  const setUser = useUserStore(s => s.setUser)
  const clearUser = useUserStore(s => s.clearUser)

  useEffect(() => {
    if(user) {
      setUser(user);
    } else {
      clearUser();
    }
  }, [user]);

  return null
}
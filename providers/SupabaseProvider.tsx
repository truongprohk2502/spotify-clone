"use client";

import { useState, type FC, type ReactNode } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface IProps {
  children: ReactNode;
}

const SupabaseProvider: FC<IProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;

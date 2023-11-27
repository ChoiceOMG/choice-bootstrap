// src/app/appointment/providers.tsx

"use client";

import { store } from "@/store";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from 'react-redux';


type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </SessionProvider>
  )
};

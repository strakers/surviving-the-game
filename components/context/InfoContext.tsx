'use client';

import { z } from 'zod';
import { createContext, useContext, PropsWithChildren } from "react";
import {infoSchema} from "@/lib/infoSchema";

export type InfoContextType = z.infer<typeof infoSchema>;

// export interface BioDataContextType {
//   alias?: string;
//   real_name?: string,
//   age?: number,
//   titles?: string[],
//   nicknames?: string[],
//   affiliations?: string[],
//   class?: string,
//   sex?: ('F'|'M'|'X'|'O'),
//   tribe?: string,
//   occupation?: string,
//   designation?: string,
//   debut?: number,
// }

export const InfoContext = createContext<InfoContextType|null>(null);

export function useInfoContext() {
  return useContext(InfoContext);
}

export function InfoProvider({ children, info }: PropsWithChildren<{info?:InfoContextType}>) {
  if (!info) return children;

  return (
    <InfoContext.Provider value={ info }>
      { children }
    </InfoContext.Provider>
  )

}


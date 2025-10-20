'use client';

import { z } from 'zod';
import { createContext, useState, useEffect, useContext, type ReactNode, PropsWithChildren } from "react";
import {biodataSchema} from "@/lib/biodata.schema";

export type BioDataContextType = z.infer<typeof biodataSchema>;

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

export const BioDataContext = createContext<BioDataContextType|null>(null);

export function useBioDataContext() {
  return useContext(BioDataContext);
}

export function BioDataProvider({ children, bioData }: PropsWithChildren<{bioData?:BioDataContextType}>) {
  if (!bioData) return children;

  return (
    <BioDataContext.Provider value={ bioData }>
      { children }
    </BioDataContext.Provider>
  )

}


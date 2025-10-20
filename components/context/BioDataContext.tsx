'use client';

import { createContext, useState, useEffect, useContext, type ReactNode, PropsWithChildren } from "react";

export interface BioDataContextType {
  alias?: string;
  realName?: string,
  age?: number,
  titles?: string[],
  nicknames?: string[],
  affiliations?: string[],
  class?: string,
  sex?: ('F'|'M'|'X'|'O'),
  tribe?: string,
  occupation?: string,
  designation?: string,
  debut?: number,
}

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


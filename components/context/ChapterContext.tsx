'use client';

import { createContext, useState, useEffect, useContext, type ReactNode } from "react";

const storageKey = "currChapter";

export interface ChapterContextType {
  currChapter: number;
  setCurrChapter: (chapter: number) => void;
}

export interface ChapterProviderProps {
  children: ReactNode;
}

export const ChapterContext = createContext<ChapterContextType|null>(null);

export function useChapterContext() {
  const context = useContext(ChapterContext);

  if (!context) {
    throw new Error('useChapterContext must be used within a ChapterProvider component.');
  }

  return context;
}

export function ChapterProvider({ children }: ChapterProviderProps) {
  const [currChapter, setCurrChapter] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const storedChapter = localStorage.getItem(storageKey);
    if (storedChapter) {
      const chapter = parseInt(storedChapter, 10);
      if (!isNaN(chapter) && chapter > 0) {
        setCurrChapter(chapter);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateChapterStorage = (ch: number) => {
    const validChapter = Math.max(0, ch);

    setCurrChapter(validChapter);

    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, String(validChapter));
    }
  }

  const contextValue: ChapterContextType = {
    currChapter,
    setCurrChapter: updateChapterStorage,
  }

  if (!isLoaded) return null;

  return (
    <ChapterContext.Provider value={ contextValue }>
      { children }
    </ChapterContext.Provider>
  )
}
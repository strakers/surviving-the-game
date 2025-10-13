'use client';

import { PropsWithChildren, type ReactNode } from "react";
import { useChapterContext } from '@/components/context/ChapterContext';

export default function Spoiler({ children, minChapter = 0, placeholder }: PropsWithChildren<{minChapter: number, placeholder?: ReactNode}>) {
  const { currChapter } = useChapterContext();

  return (
    minChapter <= currChapter
      ? children
      : <>{placeholder}</>
  )
}
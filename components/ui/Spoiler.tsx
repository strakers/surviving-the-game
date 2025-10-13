'use client';

import { PropsWithChildren } from "react";
import { useChapterContext } from '@/components/context/ChapterContext';

export default function Spoiler({ children, minChapter = 0 }: PropsWithChildren<{minChapter: number}>) {
  const { currChapter } = useChapterContext();

  return (
    minChapter <= currChapter
      ? children
      : <></>
  )
}
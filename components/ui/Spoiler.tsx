'use client';

import { PropsWithChildren, Fragment, type ReactNode } from "react";
import { useChapterContext } from '@/components/context/ChapterContext';

export default function Spoiler({
  children,
  minChapter = -1,
  maxChapter = -1,
  placeholder
}: PropsWithChildren<{minChapter: number, maxChapter?: number, placeholder?: ReactNode}>) {
  const { currChapter } = useChapterContext();

  if (
    minChapter > 0 && minChapter > currChapter ||
    maxChapter > 0 && maxChapter < currChapter
  ) return (<>{placeholder}</>);

  return <Fragment>{children}</Fragment>;
}
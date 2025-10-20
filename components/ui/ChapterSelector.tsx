'use client';

import { useChapterContext } from "../context/ChapterContext";

export default function ChapterSelector() {
  const {
    currChapter,
    setCurrChapter,
  } = useChapterContext();

  return (
    <div className="flex flex-col gap-3 pb-2">
      <input
        className="text-center rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        title="Current chapter"
        type="number"
        min="0"
        step="1"
        value={currChapter}
        onChange={(e) => setCurrChapter(Number(e.target.value))} />
    </div>
  )
}
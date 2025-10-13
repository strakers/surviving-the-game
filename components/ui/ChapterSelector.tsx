'use client';

import { useChapterContext } from "../context/ChapterContext";

export default function ChapterSelector() {
  const {
    currChapter,
    setCurrChapter,
  } = useChapterContext();

  return (
    <div>
      <input
        title="Current chapter"
        type="number"
        min="0"
        step="1"
        value={currChapter}
        onChange={(e) => setCurrChapter(Number(e.target.value))} />
    </div>
  )
}
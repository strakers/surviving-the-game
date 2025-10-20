'use client';

import { useBioDataContext } from "@/components/context/BioDataContext";

const bioKeyReplacements = {}

function processKey(key: string): string {
  return key[0].toUpperCase() + key.slice(1);
}

export default function BioData() {
  const bioData = useBioDataContext();

  if (!bioData) return <></>;

  return (<div className="border-1 p-4 rounded-xl inline-block">
    {Object.entries(bioData).map(([k, v]) => (
      <div key={k}><span className="text-fd-muted-foreground">{processKey(k)}</span>: {v}</div>
    ))}
  </div>)
}
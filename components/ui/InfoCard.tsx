'use client';

import { useInfoContext } from "@/components/context/InfoContext";

function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

function processKey(key: string): string {
  if (key.includes("-")) {
    return key.split("-").map(capitalize).join(' ');
  }
  return capitalize(key);
}

function processValue(value: string|string[]|number|undefined): string {
  if (value == null) return "";
  if (Array.isArray(value)) return value.map(capitalize).join(", ");
  if (typeof value === "number") return value.toString();
  return capitalize(value);
}

export default function InfoCard() {
  const infoData = useInfoContext();

  if (!infoData) return <></>;

  return (<div className="border-1 p-4 rounded-xl inline-block">
    {Object.entries(infoData).map(([k, v]) => (
      <div key={k}><span className="text-fd-muted-foreground">{processKey(k)}</span>: {processValue(v)}</div>
    ))}
  </div>)
}
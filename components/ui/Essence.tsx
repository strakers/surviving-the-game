import { PropsWithChildren } from "react";
import Spoiler from "@/components/ui/Spoiler";
import { Card } from "fumadocs-ui/components/card";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";

interface EssenceProps {
  name: string;
  rank: number;
  chapterGained: number;
  chapterRemoved?: number;
}

export default function Essence({ name, rank, chapterGained, chapterRemoved, children }: PropsWithChildren<EssenceProps>) {
  const spoilerProps = {
    minChapter: chapterGained,
  };

  if (chapterRemoved) {
    spoilerProps['maxChapter'] = chapterRemoved - 1;
  }

  return <Spoiler {...spoilerProps}>
    <Card title={name} className={"mb-4"}>
      <div className="card-title"><em>Rank {rank}</em></div>
      <hr className="mb-2 mt-2" />
      <Accordions className={"border-transparent"}>
        <Accordion title="Details">
          {children}
        </Accordion>
      </Accordions>
    </Card>
  </Spoiler>
}
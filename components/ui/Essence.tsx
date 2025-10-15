import React, { PropsWithChildren, type DetailedReactHTMLElement } from "react";
import Spoiler from "@/components/ui/Spoiler";
import { Card } from "fumadocs-ui/components/card";
import {Tab, Tabs} from 'fumadocs-ui/components/tabs';
import { twMerge as cn } from 'tailwind-merge';

interface EssenceProps {
  name: string;
  rank: number;
  chapterGained: number;
  chapterRemoved?: number;
}

const Abilities = ({ children }: PropsWithChildren) => {
  return children;
}

const Stats = ({ children }: PropsWithChildren) => {
  return children;
}

const validTabTypes = [Abilities, Stats];

function Essence({ name, rank, chapterGained = -1, chapterRemoved = 0, children }: PropsWithChildren<EssenceProps>) {
  const abilities = [];
  const stats = [];
  const tabLabels = [
    'Description',
  ];

  const newChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    if (!validTabTypes.includes(child.type)) return child;

    switch (child.type) {
      case Abilities: abilities.push(<Tab value={'Abilities'}>{child}</Tab>); break;
      case Stats: stats.push(<Tab value={'Stats'}>{child}</Tab>); break;
    }
  });

  if (abilities.length) tabLabels.push('Abilities');
  if (stats.length) tabLabels.push('Stats');

  return (<Spoiler minChapter={chapterGained} maxChapter={chapterRemoved - 1}>
    <Card title={name} className={"mb-4 text-lg"}>
      <div className="card-title"><em>Rank {rank}</em></div>
      <hr className="mb-4 mt-4" />

      <Tabs items={tabLabels} className={'border-transparent bg-muted'}>
        <Tab value={'Description'}>{newChildren}</Tab>
        {...abilities}
        {...stats}
      </Tabs>

      {/*{React.Children.map(children, child => {*/}
      {/*  if (React.isValidElement(child) && child.type === Accordions) {*/}
      {/*    return React.cloneElement(child as DetailedReactHTMLElement<{className: string}, HTMLElement>, {*/}
      {/*      className: cn(child.props.className, 'border-transparent'),*/}
      {/*    });*/}
      {/*  }*/}
      {/*  return child;*/}
      {/*})}*/}

    </Card>
  </Spoiler>);
}

export { Essence, Abilities, Stats };
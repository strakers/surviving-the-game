import React, { PropsWithChildren, type DetailedReactHTMLElement } from "react";
import Spoiler from "@/components/ui/Spoiler";
import { Card } from "fumadocs-ui/components/card";
import {Tab, Tabs} from 'fumadocs-ui/components/tabs';
// import { twMerge as cn } from 'tailwind-merge';

interface EssenceProps {
  name: string;
  rank: number;
  chapterGained: number;
  chapterRemoved?: number;
}

type ChildHasType = {
  type: (({ children }: { children?: React.ReactNode; }) => React.ReactNode),
}

type ChildPropsAsString = {
  type: string,
  props: {
    children: string,
  }
}

type StatPair = { name: string, value: number };

const Abilities = ({ children }: PropsWithChildren) => {
  return children;
}

const Stats = ({ children }: PropsWithChildren<{ wrap: boolean }>) => {
  // prepare variable for storing processed stats
  const processedChildren: StatPair[] = [];

  // extract processed stats from children if not Element
  React.Children.toArray(children).forEach((child, i) => {
    if (React.isValidElement(child)) {
      if (assertChildPropsAsString(child)) {
        const rawListString = child.props.children;
        const compiledList: { [key: string]: number } = {};
        rawListString.split("\n").forEach((pair:string) => {
          const [name = '', value = ''] = pair.split(':').map((text: string) => text.trim());
          compiledList[name] = Number(value);
          processedChildren.push({ name, value: Number(value) })
        });
      }
    }
  });

  // if processed, display individual stats
  if (processedChildren.length) {
    return <div data-processed="true">
      {processedChildren.map(({ name, value }: StatPair, i) => (
        <Stat key={i} name={name} value={value} />
      ))}
    </div>
  }

  // otherwise display children
  return <div>{children}</div>;
}

function Stat({ name, value }: PropsWithChildren<StatPair>) {
  return (
    <div>
      <span>{name}</span>:&nbsp;
      <strong>{value > 0 ? '+' + value : value}</strong>
    </div>
  );
}

const validTabTypes = [Abilities, Stats];

function Essence({ name, rank, chapterGained = -1, chapterRemoved = 0, children }: PropsWithChildren<EssenceProps>) {
  const abilities: React.ReactNode[] = [];
  const stats: React.ReactNode[] = [];
  const tabLabels = [
    'Description',
  ];

  const newChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    if (!assertChildHasType(child) || !validTabTypes.includes(child.type)) return child;

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

function assertChildPropsAsString(value: {type?: unknown}): value is ChildPropsAsString {
  if (value.type === undefined || typeof value.type !== 'string') return false;
  // if (value.props === undefined || value.props.children === undefined || typeof value.props.children !== 'string') return false;
  return true;
}

function assertChildHasType(value: { type?: unknown }): value is ChildHasType {
  return (value.type !== undefined);
}

export { Essence, Abilities, Stats };
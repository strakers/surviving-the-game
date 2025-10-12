'use client'

import {PropsWithChildren} from "react";

type SpoilerProps = { chapter: number };
const currChapter = 5;

export default function Spoiler({ chapter, children }): PropsWithChildren<SpoilerProps> {
    return currChapter >= chapter
        ? children
        : <></>
}
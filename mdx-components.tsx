import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import * as AccordionComponents from "fumadocs-ui/components/accordion";
import customComponents from '@/components/ui';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...AccordionComponents,
    ...TabsComponents,
    ...customComponents,
  };
}

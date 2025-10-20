import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { ChapterProvider } from '@/components/context/ChapterContext';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <ChapterProvider>
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions(true)}>
        {children}
      </DocsLayout>
    </ChapterProvider>
  );
}

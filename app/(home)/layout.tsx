import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { ChapterProvider } from "@/components/context/ChapterContext";

export default function Layout({ children }: LayoutProps<'/'>) {
  return <ChapterProvider>
      <HomeLayout {...baseOptions(true)}>
          {children}
      </HomeLayout>
  </ChapterProvider>;
}

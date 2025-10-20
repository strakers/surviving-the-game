import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import ChapterSelector from '@/components/ui/ChapterSelector';
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(withSelector = false): BaseLayoutProps {
  const links = [];
  if (withSelector) {
    links.push({
      type: 'custom',
      children: <ChapterSelector />,
      // secondary: true is often used to push it to the right/group it with icons
      secondary: true,
    });
  }
  return {
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          STGB
        </>
      ),
      transparentMode: 'top',
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links,
  };
}

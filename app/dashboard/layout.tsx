import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'DeepShort | AI YouTube Shorts Creator',
    template: '%s | DeepShort',
  },
  description: 'content creation with AI-powered YouTube Shorts',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div> {children}</div>;
}

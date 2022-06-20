import { PropsWithChildren, ReactElement } from 'react';

interface PageLayoutProps {
  title?: string;
}

function PageLayout({
  children,
}: PropsWithChildren<PageLayoutProps>): ReactElement {
  return <>{children}</>;
}

export default PageLayout;

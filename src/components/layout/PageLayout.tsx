import { PropsWithChildren, ReactElement } from 'react';
import MainNavigator from '@/components/layout/MainNavigator';
import { toTitle } from '@/utils/string';
import Head from 'next/head';

export interface PageLayoutProps {
  title?: string;
}

function PageLayout({
  title: titleProp,
  children,
}: PropsWithChildren<PageLayoutProps>): ReactElement {
  const title = toTitle(titleProp);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MainNavigator title={title} />
      {children}
    </>
  );
}

export default PageLayout;

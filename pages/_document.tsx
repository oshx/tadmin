import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ReactElement } from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@/utils/emotion/cache';
import Meta from '@/configs/meta';

class TadminDocument extends Document {
  public render(): ReactElement {
    return (
      <Html>
        <Head>
          <title>{Meta.serviceName}</title>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

TadminDocument.getInitialProps = async function getInitialProps(
  ctx: DocumentContext
): Promise<DocumentInitialProps> {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp(App: any) {
        return function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        };
      },
    });
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => {
    return (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    );
  });
  return {
    ...initialProps,
    emotionStyleTags,
  } as any;
};

export default TadminDocument;

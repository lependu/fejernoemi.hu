import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import cssReset from 'styles/reset.css'
import globalStyle from 'styles/global.css'
import fontStyle from 'styles/fonts.css'

export default class CostumDocument extends Document {
  static getInitialProps ({ renderPage }) {
    let { html, head, errorHtml, chunks } = renderPage()
    let styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='hu'>
        <Head>
          <meta name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <style dangerouslySetInnerHTML={{__html: cssReset}} />
          <style dangerouslySetInnerHTML={{__html: fontStyle}} />
          <style dangerouslySetInnerHTML={{__html: globalStyle}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

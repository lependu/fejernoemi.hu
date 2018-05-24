import App, {Container} from 'next/app'
import Layout from 'components/layout'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    const { asPath } = ctx
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { asPath, pageProps }
  }

  render () {
    const { asPath, Component, pageProps } = this.props
    return (
      <Container>
        <Layout asPath={asPath}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

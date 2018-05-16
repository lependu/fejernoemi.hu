import { compose, mapProps, setStatic } from 'recompose'
import withMedia from '@hocs/with-match-media-props'
import withIsClient from 'containers/with-is-client'
import withIsLoading from 'containers/with-is-loading'
import Layout from '../containers/layout'
import { getPropsFromPath } from 'lib/page-props'

export const enchance = compose(
  setStatic(
    'getInitialProps',
    ({ asPath }) => {
      let pageProps = getPropsFromPath(asPath)
      return { page: pageProps ? pageProps.query.id : 'index' }
    }
  ),
  withMedia({
    mediaMobile: { maxWidth: 799 }
  }),
  withIsClient,
  withIsLoading,
  mapProps(
    ({ isClient, isLoading, mediaMobile, page }) => ({
      isLoading,
      // Sets mobile view as default content in server side
      isMobile: !isClient || (isClient && mediaMobile),
      page
    })
  )
)

export default enchance(Layout)

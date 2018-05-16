import NavigationMobile from 'containers/navigation-mobile'
import NavigationDesktop from 'containers/navigation-desktop'
import ContentSelector from 'containers/content-selector'
import SiteFooter from 'components/site-footer'
import Loading from 'components/loading'

export default ({ isLoading, isMobile, page }) =>
  <div id='site-layout' style={{ position: 'relative' }}>
    { isLoading && <Loading /> }
    <nav id='site-navigation'>
      { isMobile
        ? <NavigationMobile />
        : <NavigationDesktop page={page} />
      }
    </nav>
    <ContentSelector isMobile={isMobile} page={page} />
    <SiteFooter isMobile={isMobile} />
  </div>

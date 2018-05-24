import NavigationDesktop from 'components/navigation-desktop'
import NavigationMobile from 'components/navigation-mobile'
import SiteFooter from 'components/site-footer'

export default ({ asPath, children }) =>
  <div id='site-layout' style={{ position: 'relative' }}>
    <nav id='site-navigation'>
      <NavigationDesktop asPath={asPath} />
      <NavigationMobile />
    </nav>
    {children}
    <SiteFooter />
  </div>

import { branch, withProps } from 'recompose'
import {
  DesktopList, GalleryList, PsychologistList
} from 'containers/navigation-components'

export const NavigationDesktop = ({ MainNav, SecondaryNav }) => (
  <div className='navigation-desktop content-wrapper'>
    <MainNav />
    <SecondaryNav />
  </div>
)

export const enchance = branch(
  // With psychologist secondary list.
  ({ page }) => (
    page &&
    ['adult', 'drama', 'magic', 'muppet', 'org'].indexOf(page) > -1
  ),
  withProps({
    MainNav: () => (<DesktopList />),
    SecondaryNav: () => (<PsychologistList />)
  }),
  branch(
    // With gallery secondary list.
    ({ page }) => (page && page.split('-')[0] === 'gallery'),
    withProps({
      MainNav: () => (<DesktopList />),
      SecondaryNav: () => (<GalleryList />)
    }),
    // Without secondary list.
    withProps({
      MainNav: () => (<DesktopList />),
      SecondaryNav: () => null
    })
  )
)

export default enchance(NavigationDesktop)

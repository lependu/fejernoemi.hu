import { mapProps } from 'recompose'
import * as linkItems from 'lib/link-items'
import ListComponent from 'components/list-component'

const Primary = () =>
  <ListComponent style='base' list={linkItems.desktop} />
const Carrier = () =>
  <ListComponent style='spaceAround' list={linkItems.carrier} />
const Gallery = () =>
  <ListComponent style='spaceAround' list={linkItems.gallery} />
const Psychologist = () =>
  <ListComponent style='spaceAround' list={linkItems.psychologist} />

export const NavigationDesktop = ({ Primary, Secondary }) =>
  <div className='navigation-desktop content-wrapper'>
    <Primary />
    <Secondary />
    <style jsx>{`
      .navigation-desktop {
        display: block;
      }
      @media screen and (max-width: 799px) {
        .navigation-desktop { display: none; }
      }
    `}</style>
  </div>

export const enchance = mapProps(
  ({ asPath }) => {
    let subpath = asPath.split('/')[1]
    switch (subpath) {
      case 'pszichologus':
        return { Primary, Secondary: Psychologist }
      case 'munka-palyatanacsadas':
        return { Primary, Secondary: Carrier }
      case 'galeria':
        return { Primary, Secondary: Gallery }
      default:
        return { Primary, Secondary: () => null }
    }
  }
)

export default enchance(NavigationDesktop)

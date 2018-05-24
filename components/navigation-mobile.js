import { withState } from 'recompose'
import * as linkItems from 'lib/link-items'
import Icon from 'components/navigation-mobile-icon'
import LinkItem from 'components/link-item'
import ListComponent from 'components/list-component'
import ListItemComponent from 'components/list-item-component'

const BrandItem = ({ setVisible }) =>
  <li className='brand-item' key={linkItems.brand.key}
    onClick={() => setVisible(false)}>
    <LinkItem as={linkItems.brand.as}>
      {linkItems.brand.label}
    </LinkItem>
  </li>

const CarrierItem = () => <ListItemComponent item={linkItems.mobileCarrier} />

const ContactItem = () => <ListItemComponent item={linkItems.mobileContact} />

const Carrier = () =>
  <ListComponent list={linkItems.carrier} style='vertical' />

const Gallery = () =>
  <ListComponent list={linkItems.gallery} style='vertical' />

const Psychologist = () =>
  <ListComponent list={linkItems.psychologist} style='vertical' />

const PopupMobile = ({ setVisible }) =>
  <ul className='navigation-popup' onClick={() => setVisible(false)}>
    <CarrierItem />
    <Carrier />
    <li className='list-label' key='label-psychologist'>PSZICHOLÓGUS</li>
    <li><Psychologist /></li>
    <li className='list-label' key='label-gallery'>GALÉRIA</li>
    <li><Gallery /></li>
    <ContactItem />
  </ul>

export const NavigationMobile = ({
  isVisible, setVisible
}) =>
  <div className='navigation-mobile content-wrapper'>
    <ul className='navigation-mobile-brand'>
      <BrandItem setVisible={setVisible} />
      <Icon isVisible={isVisible} setVisible={setVisible} />
    </ul>
    { isVisible &&
      <PopupMobile isVisible={isVisible} setVisible={setVisible} />
    }
    <style jsx>{`
      .navigation-mobile {
        display: none;
      }
      @media screen and (max-width: 799px) {
        .navigation-mobile { display: block; }
      }
    `}</style>
  </div>

export const enchance = withState('isVisible', 'setVisible', false)

export default enchance(NavigationMobile)

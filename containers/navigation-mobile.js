import { compose, mapProps, withState } from 'recompose'
import Icon from 'components/navigation-mobile-icon'
import {
  BrandItem, ContactItem, GalleryMobile, PsychologistMobile, WorkItem
} from 'containers/navigation-components'

const PopupMobile = ({ setVisible }) =>
  <ul className='navigation-popup' onClick={() => setVisible(false)}>
    <WorkItem />
    <li className='list-label' key='label-psychologist'>PSZICHOLÓGUS</li>
    <li><PsychologistMobile /></li>
    <li className='list-label' key='label-gallery'>GALÉRIA</li>
    <li><GalleryMobile /></li>
    <ContactItem />
  </ul>

export const NavigationMobile = ({
  BrandItem, isVisible, PopupList, setVisible
}) =>
  <div className='navigation-mobile content-wrapper'>
    <ul className='navigation-mobile-brand'>
      <BrandItem />
      <Icon isVisible={isVisible} setVisible={setVisible} />
    </ul>
    { isVisible &&
      <PopupMobile isVisible={isVisible} setVisible={setVisible} />
    }
  </div>

export const enchance = compose(
  // Sets state with nahdler and default value.
  withState('isVisible', 'setVisible', false),
  mapProps(
    ({ isVisible, setVisible }) => {
      // Generates menu icon based on state
      return { BrandItem, isVisible, setVisible }
    }
  )
)

export default enchance(NavigationMobile)

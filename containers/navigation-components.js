import { withProps } from 'recompose'
import linkProps from 'lib/link-props'
import ListComponent from 'components/list-component'
import ListItemComponent from 'components/list-item-component'

const listStyles = {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center'
  },
  vertical: {
    display: 'block',
    listStyle: 'none',
    padding: '0 0 0 1rem'
  },
  spaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    alignItems: 'center'
  }
}
/**
 * Generates navigation list based on object key in lib/link-props.
 *
 * @param {string} key The object key in lib/link-props object.
 *
 * @return {function} Navigation list component enchanced with props.
 *
 * @public
**/
const getList = (key, variant) => {
  const style = listStyles[variant]
  const list = linkProps[key].map(item =>
    <ListItemComponent item={item} key={item.key} className='navigation-item' />
  )

  return withProps({ style, list })(ListComponent)
}

/**
 * Generates navigation list item based on object key in lib/link-props.
 *
 * @param {string} key The object key in lib/link-props object.
 *
 * @return {function} Navigation list item component.
 *
 * @public
**/
const getItem = (key) => {
  return withProps({
    item: linkProps[key],
    className: `navigation-item-${key}`
  })(ListItemComponent)
}

export const DesktopList = getList('desktop', 'base')
export const GalleryList = getList('gallery', 'spaceAround')
export const GalleryMobile = getList('gallery', 'vertical')
export const PsychologistList = getList('psychologist', 'spaceAround')
export const PsychologistMobile = getList('psychologist-mobile', 'vertical')

export const BrandItem = getItem('brand')
export const ContactItem = getItem('contact')
export const WorkItem = getItem('work')

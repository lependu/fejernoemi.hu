import { mapProps } from 'recompose'
import LinkItem from 'components/link-item'

const styles = {
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

export const ListComponent = ({ listItems, listStyle }) =>
  <ul style={listStyle}>
    {listItems}
  </ul>

export const enchance = mapProps(
  ({ list, style }) => ({
    listItems: list.map(item =>
      <li key={item.key}>
        <LinkItem as={item.as}>{item.label}</LinkItem>
      </li>
    ),
    listStyle: styles[style]
  })
)

export default enchance(ListComponent)

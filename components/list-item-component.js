import LinkItem from 'components/link-item'

export default ({ item, style }) =>
  <li key={item.key}>
    <LinkItem as={item.as} style={style}>
      {item.label}
    </LinkItem>
  </li>

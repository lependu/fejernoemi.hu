import LinkItem from 'components/link-item'

export default ({ item, style }) =>
  <li key={item.key}>
    <LinkItem as={item.as} href={item.href} style={style}>
      {item.title}
    </LinkItem>
  </li>

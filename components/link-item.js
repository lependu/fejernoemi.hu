import { withHandlers } from 'recompose'
import { withRouter } from 'next/router'

const baseStyle = {
  display: 'block',
  margin: 0,
  padding: '0.5rem',
  textDecoration: 'none',
  color: 'rgba(31,31,31,1)'
}
export const LinkItemComponent = ({
  as,
  children,
  handleClick,
  router,
  style = baseStyle
}) =>
  <a href={as} style={style} onClick={handleClick}
    className={
      router &&
      router.asPath &&
      (router.asPath === as || router.asPath === `${as}/`)
        ? 'active'
        : ''
    }>
    {children}
  </a>

export const enchance = withHandlers({
  handleClick: props => e => {
    e.preventDefault()
    props.router.push(props.as, props.as)
  }
})

const LinkItemEnchanced = enchance(LinkItemComponent)

export default withRouter(LinkItemEnchanced)

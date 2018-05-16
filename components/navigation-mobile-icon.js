export default ({ setVisible, isVisible }) =>
  <li key={isVisible ? 'icon-close' : 'icon-hamburger'}
    onClick={() => setVisible(!isVisible)}>
    { isVisible ? <i>&#215;</i> : <i>&#9776;</i> }
  </li>

import { compose, withState } from 'recompose'
import withLifecycle from '@hocs/with-lifecycle'

/**
 * Checks if we are on client side.
 * We need this to avoid server - client side mismatches and support
 * https://reactjs.org/docs/react-dom.html#hydrate
 *
 * @returns {bool} isClient The state prop.
 * @returns {func} setClient The handler function.
**/
export default compose(
  withState('isClient', 'setClient', false),
  withLifecycle({
    onDidMount ({ setClient }) {
      setClient(true)
    }
  })
)

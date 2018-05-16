import { compose, withState } from 'recompose'
import withLifecycle from '@hocs/with-lifecycle'

/**
 * Indicates wheather client scrip is loading.
 *
 * @returns {bool} isLoading
**/
export default compose(
  withState('isLoading', 'setLoading', true),
  withLifecycle({
    onDidMount ({ setLoading }) {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  })
)

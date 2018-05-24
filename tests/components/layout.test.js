/* eslint-env jest */
import renderer from 'react-test-renderer'
import Subject from 'components/layout'

describe('Components | Layout', () => {
  test('renders without error', () => {
    const wrapper = renderer.create(<Subject asPath='/' />)
    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

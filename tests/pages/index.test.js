/* eslint-env jest */
import renderer from 'react-test-renderer'
import IndexPage from 'pages'

describe('Index page template', () => {
  test('index path', () => {
    let wrapper = renderer.create(<IndexPage page='index' />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

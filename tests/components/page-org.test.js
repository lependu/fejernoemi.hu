/* eslint-env jest */
import renderer from 'react-test-renderer'
import Subject from 'components/page-org'

describe('Component | page-org', () => {
  test('snapshot | Mobile', () => {
    let wrapper = renderer.create(<Subject isMobile />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('snapshot | Desktop', () => {
    let wrapper = renderer.create(<Subject />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

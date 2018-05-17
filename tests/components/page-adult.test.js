/* eslint-env jest */
import renderer from 'react-test-renderer'
import Subject from 'components/page-adult'

describe('Component | page-adult', () => {
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

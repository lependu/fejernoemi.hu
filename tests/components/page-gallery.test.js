/* eslint-env jest */
import renderer from 'react-test-renderer'
import Subject from 'components/page-gallery'

describe('Component | page-gallery', () => {
  describe('magic subpage', () => {
    test('snapshot | Mobile', () => {
      let wrapper = renderer.create(<Subject isMobile page='gallery-magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('snapshot | Desktop', () => {
      let wrapper = renderer.create(<Subject page='gallery-magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('work subpage', () => {
    test('snapshot | Mobile', () => {
      let wrapper = renderer.create(<Subject isMobile page='gallery-work' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('snapshot | Desktop', () => {
      let wrapper = renderer.create(<Subject page='gallery-work' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

/* eslint-env jest */
import renderer from 'react-test-renderer'
import Subject from 'components/page-child'

describe('Component | page-child', () => {
  describe('drama subpage', () => {
    test('snapshot | Mobile', () => {
      let wrapper = renderer.create(<Subject isMobile page='drama' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('snapshot | Desktop', () => {
      let wrapper = renderer.create(<Subject page='drama' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('magic subpage', () => {
    test('snapshot | Mobile', () => {
      let wrapper = renderer.create(<Subject isMobile page='magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('snapshot | Desktop', () => {
      let wrapper = renderer.create(<Subject page='magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('muppet subpage', () => {
    test('snapshot | Mobile', () => {
      let wrapper = renderer.create(<Subject isMobile page='muppet' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('snapshot | Desktop', () => {
      let wrapper = renderer.create(<Subject page='muppet' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

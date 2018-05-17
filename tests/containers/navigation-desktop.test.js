/* eslint-env jest */
import renderer from 'react-test-renderer'
import NavigationDesktop from 'containers/navigation-desktop'

describe('Container | navigation-desktop', () => {
  describe('without secondary list', () => {
    test('page index', () => {
      let wrapper = renderer.create(<NavigationDesktop page='index' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page contact', () => {
      let wrapper = renderer.create(<NavigationDesktop page='contact' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page work', () => {
      let wrapper = renderer.create(<NavigationDesktop page='work' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with Psychologist secondary list', () => {
    test('page adult', () => {
      let wrapper = renderer.create(<NavigationDesktop page='adult' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page org', () => {
      let wrapper = renderer.create(<NavigationDesktop page='org' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page drama', () => {
      let wrapper = renderer.create(<NavigationDesktop page='drama' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page magic', () => {
      let wrapper = renderer.create(<NavigationDesktop page='magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page muppet', () => {
      let wrapper = renderer.create(<NavigationDesktop page='muppet' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with Gallery secondary list', () => {
    test('page gallery-magic', () => {
      let wrapper = renderer.create(<NavigationDesktop page='gallery-magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('page gallery-work', () => {
      let wrapper = renderer.create(<NavigationDesktop page='gallery-work' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

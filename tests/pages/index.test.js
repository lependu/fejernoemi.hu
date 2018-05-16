/* eslint-env jest */
import renderer from 'react-test-renderer'
import IndexPage from 'pages'

describe('Index page template', () => {
  describe('Mobile', () => {
    test('index path', () => {
      let wrapper = renderer.create(<IndexPage page='index' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('work path', () => {
      let wrapper = renderer.create(<IndexPage page='work' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('adult path', () => {
      let wrapper = renderer.create(<IndexPage page='adult' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('magic path', () => {
      let wrapper = renderer.create(<IndexPage page='magic' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('muppet path', () => {
      let wrapper = renderer.create(<IndexPage page='muppet' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('drama path', () => {
      let wrapper = renderer.create(<IndexPage page='drama' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('org path', () => {
      let wrapper = renderer.create(<IndexPage page='org' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('gallery-work path', () => {
      let wrapper = renderer.create(<IndexPage page='gallery-work' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('gallery-magic path', () => {
      let wrapper = renderer.create(<IndexPage page='gallery-magic' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('contact path', () => {
      let wrapper = renderer.create(<IndexPage page='contact' isMobile />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Desktop', () => {
    test('index path', () => {
      let wrapper = renderer.create(<IndexPage page='index' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('work path', () => {
      let wrapper = renderer.create(<IndexPage page='work' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('adult path', () => {
      let wrapper = renderer.create(<IndexPage page='adult' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('magic path', () => {
      let wrapper = renderer.create(<IndexPage page='magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('muppet path', () => {
      let wrapper = renderer.create(<IndexPage page='muppet' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('drama path', () => {
      let wrapper = renderer.create(<IndexPage page='drama' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('org path', () => {
      let wrapper = renderer.create(<IndexPage page='org' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('gallery-work path', () => {
      let wrapper = renderer.create(<IndexPage page='gallery-work' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('gallery-magic path', () => {
      let wrapper = renderer.create(<IndexPage page='gallery-magic' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('contact path', () => {
      let wrapper = renderer.create(<IndexPage page='contact' />)
      let tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

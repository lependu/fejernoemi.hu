/* eslint-env jest */
import renderer from 'react-test-renderer'
import links from 'data/links'

describe('Page snapshots', () => {
  let pages = []

  // removes duplicates
  links.map(item => {
    if (pages.indexOf(item.as) === -1) {
      pages.push(item.as)
    }
  })

  pages.forEach(item => {
    test(`${item}`, () => {
      const module = require(`../../pages${item}`)
      const Subject = module.default
      const wrapper = renderer.create(<Subject />)
      const tree = wrapper.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

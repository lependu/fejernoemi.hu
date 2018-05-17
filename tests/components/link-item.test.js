/* eslint-env jest */
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { withRouter } from 'next/router'
import { LinkItemComponent, enchance } from 'components/link-item'

describe('Component | link-item', () => {
  test('enchanced with props', () => {
    let Enchanced = enchance(LinkItemComponent)
    let EnchancedWithRouter = withRouter(Enchanced)
    let wrapper = mount(
      <EnchancedWithRouter as='/alpha' href='/?id=alpha' style={{ margin: 0 }}>
        <p>children</p>
      </EnchancedWithRouter>
    )
    let subject = Object.keys(wrapper.find(LinkItemComponent).props())

    expect(subject).toContain('as')
    expect(subject).toContain('handleClick')
    expect(subject).toContain('href')
    expect(subject).toContain('router')
    expect(subject).toContain('style')
  })

  test('handles click event', () => {
    let router = { push: jest.fn() }
    let e = { preventDefault: jest.fn() }
    let Enchanced = enchance(LinkItemComponent)
    let subject = mount(
      <Enchanced href='/?id=alpha' as='/alpha' style={{ margin: 0 }}
        router={router}>
        <p>hello</p>
      </Enchanced>
    )
    let expected = [['/?id=alpha', '/alpha']]

    subject.find('a').simulate('click', e)
    expect(e.preventDefault.mock.calls.length).toBe(1)
    expect(router.push.mock.calls).toEqual(expected)
  })

  test('LinkItemComponent | snapshot | not active', () => {
    let wrapper = renderer.create(<LinkItemComponent />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('LinkItemComponent | snapshot | active | no trailing slash', () => {
    let props = {
      router: {
        asPath: '/hello'
      },
      as: '/hello'
    }

    let wrapper = renderer.create(<LinkItemComponent {...props} />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('LinkItemComponent | snapshot | active | with trailing slash', () => {
    let props = {
      router: {
        asPath: '/hello/'
      },
      as: '/hello'
    }

    let wrapper = renderer.create(<LinkItemComponent {...props} />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

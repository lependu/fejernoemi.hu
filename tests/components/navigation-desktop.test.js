/* eslint-env jest */
import renderer from 'react-test-renderer'
import Subject from 'components/navigation-desktop'

describe('Components | navigation-desktop', () => {
  test('without secondary navigation', () => {
    const wrapper = renderer.create(<Subject asPath='/' />)
    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with carrier secondary navigation', () => {
    const wrapper = renderer.create(<Subject asPath='/munka-palyatanacsadas' />)
    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with psychologist secondary navigation', () => {
    const wrapper = renderer.create(
      <Subject asPath='/pszichologus/felnotteknek' />
    )
    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with gallery secondary navigation', () => {
    const wrapper = renderer.create(
      <Subject asPath='/galeria/varazsjatek' />
    )
    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

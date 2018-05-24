/* eslint-env jest */
import { mount } from 'enzyme'
import { NavigationMobile, enchance } from 'components/navigation-mobile'

describe('Container | navigation-mobile', () => {
  test('switches icons', () => {
    let Enchanced = enchance(NavigationMobile)
    let subject = mount(<Enchanced />)

    expect(subject.find('i').text()).toBe('☰')

    subject.find('i').simulate('click')
    subject.update()

    expect(subject.find('i').text()).toBe('×')
  })

  test('shows/hides popup when navigation-mobile-icon clicked', () => {
    let Enchanced = enchance(NavigationMobile)
    let subject = mount(<Enchanced />)

    subject.find('i').simulate('click')
    subject.update()

    expect(subject.find('.navigation-popup').length).toBe(1)

    subject.find('.navigation-popup').simulate('click')
    subject.update()

    expect(subject.find('.navigation-popup').length).toBe(0)
  })

  test('hides popup when BrandItem clicked', () => {
    let Enchanced = enchance(NavigationMobile)
    let subject = mount(<Enchanced />)

    subject.find('i').simulate('click')
    subject.update()

    expect(subject.find('.navigation-popup').length).toBe(1)

    subject.find('li.brand-item').simulate('click')
    subject.update()

    expect(subject.find('.navigation-popup').length).toBe(0)
  })
})

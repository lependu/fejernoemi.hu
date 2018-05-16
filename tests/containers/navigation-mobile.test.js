/* eslint-env jest */
import { mount } from 'enzyme'
import { NavigationMobile, enchance } from 'containers/navigation-mobile'

describe('Container | navigation-mobile', () => {
  test('switch icons', () => {
    let Enchanced = enchance(NavigationMobile)
    let subject = mount(<Enchanced />)

    expect(subject.find('i').text()).toBe('☰')

    subject.find('i').simulate('click')
    subject.update()

    expect(subject.find('i').text()).toBe('×')
  })

  test('shows/hides popup', () => {
    let Enchanced = enchance(NavigationMobile)
    let subject = mount(<Enchanced />)

    subject.find('i').simulate('click')
    subject.update()

    expect(subject.find('.navigation-popup').length).toBe(1)

    subject.find('.navigation-popup').simulate('click')
    subject.update()

    expect(subject.find('.navigation-popup').length).toBe(0)
  })
})

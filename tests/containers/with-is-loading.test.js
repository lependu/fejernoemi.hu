/* eslint-env jest */
import { Component } from 'react'
import { mount } from 'enzyme'
import withIsLoading from 'containers/with-is-loading'

class MockComponent extends Component {
  render () {
    return <div />
  }
}

describe('Containers | with-is-loading', () => {
  test('Enchances props with state and state handler', () => {
    let Enchanced = withIsLoading(MockComponent)
    let wrapper = mount(<Enchanced />)

    let subject = wrapper.find(MockComponent).props()

    expect(subject.isLoading).toBe(true)
    expect(typeof subject.setLoading).toBe('function')
  })

  test('Updates state with delay', () => {
    jest.useFakeTimers()

    let Enchanced = withIsLoading(MockComponent)
    let wrapper = mount(<Enchanced />)

    expect(wrapper.find(MockComponent).prop('isLoading')).toBe(true)

    jest.advanceTimersByTime(500)
    wrapper.update()

    expect(wrapper.find(MockComponent).prop('isLoading')).toBe(false)
  })
})

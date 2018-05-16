/**
/* @jest-environment node
**/
/* eslint-env jest */
import { Component } from 'react'
import { enchance } from 'pages'

const MockComponent = class MockComponent extends Component {
  render () {
    return <div />
  }
}

describe('index page template | server side', () => {
  it('#getInitialProps | with valid asPath', () => {
    let Enchanced = enchance(MockComponent)

    expect(Enchanced).toBeTruthy()

    let subject = Enchanced.getInitialProps({ asPath: '/kapcsolat' })

    let expected = { page: 'contact' }
    expect(subject).toEqual(expected)
  })

  it('#getInitialProps | with invalid asPath', () => {
    let Enchanced = enchance(MockComponent)

    expect(Enchanced).toBeTruthy()

    let subject = Enchanced.getInitialProps({ asPath: '/not-exists' })

    let expected = { page: 'index' }
    expect(subject).toEqual(expected)
  })
})

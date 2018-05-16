/**
 * @jest-environment jest-environment-jsdom-global
**/
/* global jsdom */
/* eslint-env jest */
import { pageProps, getPropsFromPath } from 'lib/page-props'

describe('page-props | Client side', () => {
  test('#getPropsFromPath extracts props', () => {
    jsdom.reconfigure({
      url: 'https://www.example.com/'
    })
    let expected = pageProps['/']
    let actual = getPropsFromPath('/')
    expect(actual).toEqual(expected)
  })

  test('#getPropsFromPath handles trailing slash', () => {
    jsdom.reconfigure({
      url: 'https://www.example.com/kapcsolat/'
    })
    let expected = pageProps['/kapcsolat']
    let actual = getPropsFromPath('/kapcsolat/')
    expect(actual).toEqual(expected)
  })
})

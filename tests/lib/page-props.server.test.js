/**
 * @jest-environment node
**/
/* eslint-env jest */
import { pageProps, getPropsFromPath } from 'lib/page-props'

describe('lib | page-props | Server side', () => {
  test('#getPropsFromPath extracts props', () => {
    let expected = pageProps['/']
    let actual = getPropsFromPath('/')
    expect(actual).toEqual(expected)
  })
})

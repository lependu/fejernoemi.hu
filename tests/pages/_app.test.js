/* eslint-env jest */
import App from 'pages/_app'

describe('pages | _app.js', () => {
  test('#getInitialProps returns t, asPath props', async () => {
    const Component = () => <div />
    const router = {}
    const ctx = { asPath: '/alpha' }
    const actual = await App.getInitialProps({ Component, router, ctx })

    expect(actual.asPath).toBe('/alpha')
  })

  test('#getInitialProps with Component.getInitialProps', async () => {
    const Component = () => <div />
    Component.getInitialProps = async props => {
      return props
    }

    const router = {}
    const ctx = { asPath: '/alpha' }
    const actual = await App.getInitialProps({ Component, router, ctx })

    expect(actual.asPath).toBe('/alpha')
  })
})

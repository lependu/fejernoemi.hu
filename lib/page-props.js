const pageProps = {
  '/': { page: '/', query: { id: 'index' } },
  '/munka-palyatanacsadas': { page: '/', query: { id: 'work' } },
  '/pszichologus/felnott': { page: '/', query: { id: 'adult' } },
  '/pszichologus/ceg': { page: '/', query: { id: 'org' } },
  '/pszichologus/varazsjatek': { page: '/', query: { id: 'magic' } },
  '/pszichologus/babterapia': { page: '/', query: { id: 'muppet' } },
  '/pszichologus/pszichodrama': { page: '/', query: { id: 'drama' } },
  '/galeria/palyaorientacio': { page: '/', query: { id: 'gallery-work' } },
  '/galeria/varazsjatek': { page: '/', query: { id: 'gallery-magic' } },
  '/kapcsolat': { page: '/', query: { id: 'contact' } }
}

const getPropsFromPath = (asPath) => {
  if (typeof window !== 'undefined' && window.location.href) {
    let key = asPath.replace(window.location.href, '')
    if (key !== '/') key = key.replace(/\/$/, '')
    return pageProps[key]
  } else {
    return pageProps[asPath]
  }
}

// next.config.js does not compile with babel, so we need ES5.
module.exports = {
  pageProps,
  getPropsFromPath
}

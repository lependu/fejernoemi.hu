import Head from 'next/head'
import withGallery from 'hocs/with-gallery'

const title = 'Pályaorientáció 13-17 éveseknek'
const Gallery =
  withGallery(6, 'palyaorientacio', title)

export default () =>
  <section>
    <Head>
      <title>{title}</title>
      <meta name='description' content='A 13-17 éves korosztálynak rendezett pályaorientációs foglalkozás képei.' />
    </Head>
    <Gallery />
  </section>

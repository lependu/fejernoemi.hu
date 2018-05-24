import Head from 'next/head'
import withGallery from 'hocs/with-gallery'

const title = 'Varázsjáték óvodásoknak'
const Gallery =
  withGallery(4, 'varazsjatek', title)

export default () =>
  <section>
    <Head>
      <title>{title}</title>
      <meta name='description' content='Óvodásoknak tartott varázsjáték foglalkozás képei.' />
    </Head>
    <Gallery />
  </section>

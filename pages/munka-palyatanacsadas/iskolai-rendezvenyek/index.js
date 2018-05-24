import Head from 'next/head'
import t from 'lib/translate'
import indexMd from './index.md'
import CarrierTemplate from 'components/template-carrier'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Pályaorientációs iskolai rendezvények</title>
      <meta name='description' content='Célunk, hogy interaktív foglalkozásokon keresztül minél több önismerethez, pálya-és munkaerőpiaci ismerethez és játékos élményhez segítsük hozzá a pályaválasztás előtt állókat.' />
    </Head>
    <CarrierTemplate source={indexMd} title={t('carrier')}
      mdStyle='md title-orange' />
  </section>

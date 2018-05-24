import Head from 'next/head'
import t from 'lib/translate'
import indexMd from './index.md'
import CarrierTemplate from 'components/template-carrier'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Pályaválasztási klub a tranzit caféban</title>
      <meta name='description' content='Szeretnél többet tudni a választott pályádról? Szívesen kérdeznél a szakma képviselőitől, nevesebb emberektől? Még bizonytalan vagy, hogy merre indulj el?' />
    </Head>
    <CarrierTemplate source={indexMd} title={t('carrier')}
      mdStyle='md title-red' />
  </section>

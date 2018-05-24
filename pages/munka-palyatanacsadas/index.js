import Head from 'next/head'
import t from 'lib/translate'
import indexMd from './index.md'
import CarrierTemplate from 'components/template-carrier'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noémi pszichol=gus munka-pályatanácsadás</title>
      <meta name='description' content='Munka-pályatanácsadás: Kíváncsi vagy, milyen ötleteket kaphatsz a pályaválasztásodhoz, de úgy, hogy ne mondják meg mi legyél?' />
    </Head>
    <CarrierTemplate source={indexMd} title={t('carrier')}
      mdStyle='md' />
  </section>

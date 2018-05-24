import Head from 'next/head'
import t from 'lib/translate'
import indexMd from './index.md'
import CarrierTemplate from 'components/template-carrier'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noemi pszichológus pályaorientáció</title>
      <meta name='description' content='A tanácskérőben kialakul saját életpályájával vagy munkahely választásával kapcsolatosan egy álláspont, és meggyőződés. Ennek ellenőrzéséhez segítségül hívunk kérdőíveket is.' />
    </Head>
    <CarrierTemplate source={indexMd} title={t('carrier')}
      mdStyle='md title-green' />
  </section>

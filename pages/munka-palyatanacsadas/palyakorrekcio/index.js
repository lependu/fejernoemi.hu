import Head from 'next/head'
import t from 'lib/translate'
import indexMd from './index.md'
import CarrierTemplate from 'components/template-carrier'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noémi pszichológus pályakorrekciós foglalkozások</title>
      <meta name='description' content='A program része a pályaelképzelések, a képzési lehetőségek, valamint a tanulási képességek felmérése, összeegyeztetése, és a döntési készségek fejlesztése.' />
    </Head>
    <CarrierTemplate source={indexMd} title={t('carrier')}
      mdStyle='md title-pink' />
  </section>

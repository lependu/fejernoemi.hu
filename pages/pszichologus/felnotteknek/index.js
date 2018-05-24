import Head from 'next/head'
import t from 'lib/translate'
import indexMd from './index.md'
import AdultTemplate from 'components/template-adult'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noémi pszichológus feln[tteknek</title>
      <meta name='description' content='Családterápia, párterápia, meseterápia. Veszteségek feldolgozása, gyászmunka támogatása. Karriertervezési tanácsadás.' />
    </Head>
    <AdultTemplate source={indexMd} title={t('psychologist')}
      mdStyle='md title-red' />
  </section>

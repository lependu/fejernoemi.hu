import Head from 'next/head'
import t from 'lib/translate'
import sumMd from './sum.md'
import detailsMd from './details.md'
import ChildTemplate from 'components/template-child'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noémi pszichológus gyermek pszichordráma</title>
      <meta name='description' content='Biztosítja a gyerek számára, hogy a modellként eljátszott problémahelyzetek révén olyan megoldási módokat sajátítson el, amelyek valós szituációkban is segítségére lesznek.' />
    </Head>
    <ChildTemplate source={sumMd} title={t('psychologist')}
      mdStyle='md title-green' isSum />
    <ChildTemplate source={detailsMd} mdStyle='md title-green' />
  </section>

import Head from 'next/head'
import t from 'lib/translate'
import sumMd from './sum.md'
import detailsMd from './details.md'
import ChildTemplate from 'components/template-child'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noémi pszichológus varázsjáték</title>
      <meta name='description' content='A varázsjáték, egy olyan folyamat, amelyben a gyerekek megtanulnak önmaguk felé fordulni, hogy aztán később mások felé is képesek legyenek minderre.' />
    </Head>
    <ChildTemplate source={sumMd} title={t('psychologist')}
      mdStyle='md title-orange' isSum />
    <ChildTemplate source={detailsMd} mdStyle='md title-orange' />
  </section>

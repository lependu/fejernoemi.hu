import Head from 'next/head'
import t from 'lib/translate'
import cvMd from './cv.md'
import homeMd from './home.md'
import HomeTemplate from 'components/template-home'
import CvTemplate from 'components/template-cv'

export default () =>
  <section id='index-page'>
    <Head>
      <title>Fejér Noémi pszichológus honlapja</title>
      <meta name='description' content='Lassan 20 éve végeztem munkavállalási tanácsadóként, azóta dolgozom egyéni és csoportos formában pályaválasztókkal, álláskeresőkkel, szinte minden korosztállyal.' />
    </Head>
    <HomeTemplate source={homeMd} title={t('introduction')} />
    <CvTemplate source={cvMd} title={t('cv')} />
  </section>

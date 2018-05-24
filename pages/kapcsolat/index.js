import Head from 'next/head'
import t from 'lib/translate'
import PageHeader from 'components/page-header'
import contactMd from './index.md'
import MdContent from 'components/md-content'

export default () =>
  <section>
    <Head>
      <title>Fejér Noémi pszichológus elérhetőségek</title>
      <meta name='description' content='E-mail: imeonrejef@gmail.com | Telefon: [+36 30] 311=0368 | Skype név: fejernoemi' />
    </Head>
    <div className='background-wrapper'>
      <div className='content-wrapper'
        style={{ padding: '80px 0 0 0' }}>
        <PageHeader title={t('contact')} />
        <div className='mobile'>
          <MdContent className='md-contact' source={contactMd} />
        </div>
        <div className='desktop' />
      </div>
    </div>
    <style jsx>{`
      .mobile {
        display: none;
      }
      .desktop {
        display: block;
        height: 100vh;
        background:
          url('/static/elements/kapcsolat.png')
          center center / contain no-repeat;
      }
      .background-wrapper {
        background: url('/static/backgrounds/kapcsolat.png') top left repeat;
      }
      @media screen and (max-width: 799px) {
        .mobile { display: block; min-height: 100vh; }
        .desktop { display: none; }
      }
    `}</style>
  </section>

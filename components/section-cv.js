import cvMd from 'contents/cv.md'
import ReactMarkdown from 'react-markdown'
import Background from 'components/background'
import PageHeader from 'components/page-header'

const bgCv = `url('/static/footers/line.png') bottom left repeat-x,
  url('/static/backgrounds/white.png') top left`

const styleMobile = {
  display: 'block',
  width: '100%',
  margin: '0 auto',
  verticalAlign: 'baseline'
}

const titleDesktop = {
  display: 'inline-block',
  width: '37.5%',
  verticalAlign: 'top'
}

const contentDesktop = {
  display: 'inline-block',
  width: '62.5%',
  verticalAlign: 'top'
}

const imgMobile = {
  display: 'block',
  width: '100%',
  maxWidth: '300px',
  margin: '2rem auto 0 auto'
}

const imgDesktop = {
  display: 'block',
  width: '100%',
  maxWidth: '300px',
  margin: '2rem 0 0 -5%'
}

export default ({ isMobile }) =>
  <section className='section-cv'>
    <Background background={bgCv}>
      <div className='content-wrapper' style={{ padding: '2rem 0 2rem 0' }}>
        <PageHeader title='ÖNÉLETRAJZ' />
        <div style={isMobile ? styleMobile : titleDesktop}>
          <h2>BEMUTATKOZÁS</h2>
          <img src='/static/elements/portre.png'
            style={isMobile ? imgMobile : imgDesktop}
            alt='fejer-noemi-portre' />
        </div>
        <div style={isMobile ? styleMobile : contentDesktop}>
          <ReactMarkdown source={cvMd} />
        </div>
      </div>
    </Background>
  </section>

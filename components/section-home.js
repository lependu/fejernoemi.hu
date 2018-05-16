import indexMd from 'contents/index.md'
import ReactMarkdown from 'react-markdown'
import Background from 'components/background'
import ContentElement from 'components/content-element'
import PageHeader from 'components/page-header'

const bgMobile = `url('/static/backgrounds/home.png') top left repeat`

const bgDesktop = `url('/static/footers/home.png') bottom left no-repeat,
  url('/static/backgrounds/home.png') top left repeat`

const contentMobile = {
  width: '100%',
  margin: '1rem 0'
}

const contentDesktop = {
  width: '35%',
  margin: '1rem 0 1rem 65%'
}

const elementMobile = {
  position: 'relative',
  background: 'none',
  height: 'auto',
  minHeight: 'auto',
  maxHeight: 'auto'
}

const elementDesktop = {
  position: 'relative',
  background:
    `url('/static/elements/home.png') bottom left / 100% auto no-repeat`,
  height: '48vw',
  minHeight: '380px',
  maxHeight: '480px'
}

export default ({ isMobile }) =>
  <section className='section-home'>
    <Background background={isMobile ? bgMobile : bgDesktop}>
      <div className='content-wrapper' style={{ padding: '80px 0 0 0' }}>
        <PageHeader title='FEJÉR NOÉMI' />
        <ContentElement style={isMobile ? elementMobile : elementDesktop}>
          <div style={isMobile ? contentMobile : contentDesktop}>
            <ReactMarkdown source={indexMd} />
          </div>
        </ContentElement>
      </div>
    </Background>
  </section>

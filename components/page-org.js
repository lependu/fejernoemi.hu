import orgMd from 'contents/org.md'
import ReactMarkdown from 'react-markdown'
import Background from 'components/background'
import ContentElement from 'components/content-element'
import PageHeader from 'components/page-header'

const background = `url('/static/footers/line.png') bottom left repeat-x,
  url('/static/backgrounds/white.png') top left repeat`

const elementMobile = {
  position: 'relative',
  background: 'none',
  height: 'auto',
  minHeight: 'auto',
  maxHeight: 'auto'
}

const elementDesktop = {
  position: 'relative',
  background: `url('/static/elements/ceg.png') bottom left / contain no-repeat`,
  height: '48vw',
  maxHeight: '480px'
}

const contentMobile = {
  width: '100%',
  height: '100vh',
  margin: '0',
  padding: '0 0 2rem 0'
}

const contentDesktop = {
  width: '35%',
  height: 'auto',
  margin: '0 0 0 65%',
  padding: 0
}

export default ({ isMobile }) =>
  <section>
    <Background background={background}>
      <div className='content-wrapper' style={{ padding: '80px 0 0 0' }}>
        <PageHeader title='PSZICHOLÓGUS' />
        <ContentElement style={isMobile ? elementMobile : elementDesktop}>
          <div style={isMobile ? contentMobile : contentDesktop}>
            <ReactMarkdown className='md title-orange' source={orgMd} />
          </div>
        </ContentElement>
      </div>
    </Background>
  </section>

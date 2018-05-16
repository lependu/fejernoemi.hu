import ReactMarkdown from 'react-markdown'
import Background from 'components/background'
import ContentElement from 'components/content-element'
import PageHeader from 'components/page-header'

const background = `url('/static/footers/line.png') bottom left repeat-x,
  url('/static/backgrounds/gyerek.png') top left repeat`

const flags = {
  height: '50px',
  margin: '-14px 0 0 0',
  background: `url('/static/elements/flags.png') center left no-repeat`
}

const element = {
  display: 'inline-block',
  vericalAlign: 'bottom',
  background:
    `url('/static/elements/gyerek.png') bottom 4px left 0 / contain no-repeat`,
  width: '62.5%',
  height: '51vw',
  maxHeight: '510px'
}

const contentMobile = {
  display: 'block',
  verticalAlign: 'baseline',
  width: '100%',
  padding: '0 0 2rem 0'
}

const contentDesktop = {
  display: 'inline-block',
  verticalAlign: 'bottom',
  width: '37.5%',
  padding: 0
}

export default ({ details, isMobile, sum }) =>
  <section>
    <Background background={background}>
      <div className='content-wrapper' style={{ padding: '80px 0 0 0' }}>
        <ContentElement style={flags} />
        <PageHeader title='PSZICHOLÓGUS' />
        { !isMobile &&
          <ContentElement style={element} />
        }
        <div style={isMobile ? contentMobile : contentDesktop}>
          <ReactMarkdown className='md title-orange' source={sum} />
        </div>
      </div>
    </Background>
    <Background background={background}>
      <div className='content-wrapper'>
        <ReactMarkdown className='md title-orange' source={details} />
      </div>
    </Background>
  </section>

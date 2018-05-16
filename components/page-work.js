import ReactMarkdown from 'react-markdown'
import PageHeader from 'components/page-header'
import Background from 'components/background'
import ContentElement from 'components/content-element'
import carrierMd from '../contents/carrier.md'
import workMd from '../contents/work.md'

const background = `url('/static/footers/line.png') bottom left repeat-x,
  url('/static/backgrounds/munka.png') top left repeat`

const contentMobile = {
  display: 'block',
  width: '100%',
  minHeight: '100vh',
  verticalAlign: 'baseline'
}

const contentDesktop = {
  display: 'inline-block',
  width: '43vw',
  minHeight: '100vh',
  verticalAlign: 'top'
}

const elementStyle = {
  display: 'inline-block',
  width: '45vw',
  maxWidth: '430px',
  height: '60vw',
  maxHeight: '600px',
  margin: '-105px 0 0 0',
  background: `url('/static/elements/munka.png') top right / contain no-repeat`
}

export default ({ isMobile }) =>
  <section>
    <Background background={background}>
      <div className='content-wrapper' style={{ padding: '80px 0 0 0' }}>
        <PageHeader title='MUNKA-PÁLYATANACSADÁS' />
        <div style={isMobile ? contentMobile : contentDesktop}>
          <ReactMarkdown className='md title-pink' source={carrierMd} />
          <ReactMarkdown className='md title-green' source={workMd} />
        </div>
        { !isMobile && <ContentElement style={elementStyle} /> }
      </div>
    </Background>
  </section>

import ReactMarkdown from 'react-markdown'
import PageHeader from 'components/page-header'
import Background from 'components/background'
import ContentElement from 'components/content-element'
import contactMd from '../contents/contact.md'

const background = `url('/static/backgrounds/kapcsolat.png') top left repeat`

const elementStyle = {
  height: '100vh',
  background:
    `url('/static/elements/kapcsolat.png') center center / contain no-repeat`
}

export default ({ isMobile }) =>
  <section>
    <Background background={background}>
      <div className='content-wrapper'
        style={{ padding: '80px 0 0 0' }}>
        <PageHeader title='KAPCSOLAT' />
        { isMobile
          ? <ReactMarkdown className='md-contact' source={contactMd} />
          : <ContentElement style={elementStyle} />
        }
      </div>
    </Background>
  </section>

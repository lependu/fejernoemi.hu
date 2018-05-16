import ReactMarkdown from 'react-markdown'
import PageHeader from 'components/page-header'
import Background from 'components/background'
import ContentElement from 'components/content-element'
import adultMd from '../contents/adult.md'

const background = `url('/static/footers/felnott.png') bottom left repeat-x,
  url('/static/backgrounds/felnott.png') top left repeat`

const wrapperMobile = {
  display: 'block',
  padding: '80px 0'
}

const wrapperDesktop = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '80px 0 0 0'
}

const contentMobile = {
  display: 'block'
}

const contentDesktop = {
  flex: '0 1 68%'
}

const elementStyle = {
  flex: '1 0 32%',
  height: '100vw',
  maxHeight: '680px',
  background: `url('/static/elements/felnott.png') bottom right no-repeat,
   url('/static/backgrounds/felnott.png') bottom right / 235px 60px no-repeat`
}

export default ({ isMobile }) =>
  <section>
    <Background background={background}>
      <div className='content-wrapper'
        style={isMobile ? wrapperMobile : wrapperDesktop}>
        <PageHeader title='PSZICHOLÓGUS' style={{ flex: '1 0 100%' }} />
        <div style={isMobile ? contentMobile : contentDesktop}>
          <ReactMarkdown className='md-adult title-red' source={adultMd} />
        </div>
        { !isMobile && <ContentElement style={elementStyle} /> }
      </div>
    </Background>
  </section>

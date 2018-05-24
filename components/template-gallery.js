import PageHeader from 'components/page-header'
import { Carousel } from 'react-responsive-carousel'
import style from 'styles/carousel.css'

const background = `url('/static/footers/line.png') bottom left repeat-x,
  url('/static/backgrounds/white.png') top left`

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100vh',
  padding: '80px 0'
}

export default ({ list, title }) =>
  <div className='background-wrapper' style={{ background }}>
    <div className='content-wrapper content-gallery' style={wrapper}>
      <PageHeader title={title} />
      <Carousel showArrows={false} showThumbs={false} showStatus={false}>
        {list}
      </Carousel>
    </div>
    <style dangerouslySetInnerHTML={{__html: style}} />
  </div>

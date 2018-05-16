import SectionHome from 'components/section-home'
import SectionCv from 'components/section-cv'

export default ({ isMobile }) =>
  <div className='page-index'>
    <SectionHome isMobile={isMobile} />
    <SectionCv isMobile={isMobile} />
  </div>

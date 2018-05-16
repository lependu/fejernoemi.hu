import { mapProps } from 'recompose'
import SectionGallery from 'components/section-gallery'

const galleries = {
  'gallery-work': 6,
  'gallery-magic': 4
}

const wrapperStyle = {
  width: '100%',
  margin: '0 auto'
}

const imgStyle = {
  display: 'block',
  height: '60vh',
  width: 'auto',
  maxWidth: '1020px',
  maxHeight: '450px',
  margin: '0 auto'
}

export default mapProps(
  ({ isMobile, page }) => {
    let length = galleries[page]
    let list = Array.from({ length }, (v, k) => (k + 1)).map(item => {
      let src = `/static/images/${page}/img-${item}.jpg`
      return (
        <div style={wrapperStyle} key={item}>
          <img style={imgStyle} src={src} />
        </div>
      )
    })
    return { isMobile, list }
  }
)(SectionGallery)

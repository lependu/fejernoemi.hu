import { withProps } from 'recompose'
import GalleryTemplate from 'components/template-gallery'

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

export default (length, gallery, title) => {
  let list = Array.from({ length }, (v, k) => (k + 1)).map(item => {
    let src = `/static/images/${gallery}/img-${item}.jpg`
    return (
      <div style={wrapperStyle} key={item}>
        <img style={imgStyle} src={src} />
      </div>
    )
  })
  return withProps({ list, title })(GalleryTemplate)
}

import { mapProps } from 'recompose'
import SectionChild from 'components/section-child'

const contents = {
  drama: {
    sum: require('contents/drama-sum.md'),
    details: require('contents/drama-details.md')
  },
  magic: {
    sum: require('contents/magic-sum.md'),
    details: require('contents/magic-details.md')
  },
  muppet: {
    sum: require('contents/muppet-sum.md'),
    details: require('contents/muppet-details.md')
  }
}

export default mapProps(
  ({ isMobile, page }) => ({
    isMobile,
    sum: contents[page].sum,
    details: contents[page].details
  })
)(SectionChild)

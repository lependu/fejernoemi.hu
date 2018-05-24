import snarkdown from 'snarkdown'
import { mapProps } from 'recompose'

export const MdContent = ({ className, content }) =>
  <div className={className} dangerouslySetInnerHTML={{__html: content}} />

export const enchance = mapProps(
  ({ className, source }) => {
    const content = snarkdown(source)
    return { className, content }
  }
)

export default enchance(MdContent)

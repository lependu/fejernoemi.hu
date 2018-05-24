import PageHeader from 'components/page-header'
import MdContent from 'components/md-content'

export default ({ source, title, mdStyle, isSum }) =>
  <div className='background-wrapper'>
    <div className='content-wrapper' style={isSum
      ? { padding: '80px 0 0 0' }
      : { padding: 0 }
    }>
      { isSum && <div className='flags' /> }
      { isSum && <PageHeader title={title} /> }
      { isSum && <div className='element-wrapper' /> }
      <div className={isSum ? 'md-wrapper' : 'md-wrapper-full'}>
        <MdContent className={mdStyle} source={source} />
      </div>
    </div>
    <style jsx>{`
      .background-wrapper {
        background: url('/static/footers/line.png') bottom left repeat-x,
          url('/static/backgrounds/gyerek.png') top left repeat;
      }
      .flags {
        height: 50px;
        margin: -14px 0 0 0;
        background: url(/static/elements/flags.png) center left no-repeat;
      }
      .element-wrapper {
        display: inline-block;
        background:
          url('/static/elements/gyerek.png')
          bottom 4px left / contain no-repeat;
        width: 62%;
        height: 51vw;
        max-height: 510px;
      }
      .md-wrapper {
        display: inline-block;
        width: 38%;
        vertical-align: bottom;
        padding: 0;
      }
      .md-wrapper-full {
        display: block;
        width: 100%;
        padding: 0;
        vertical-align: baseline;
      }
      @media screen and (max-width: 799px) {
        .background-wrapper {
          background: url('/static/footers/line.png') bottom left repeat-x,
            url('/static/backgrounds/home.png') top left repeat;
        }
        .element-wrapper {
          display: none;
          background: none;
          height: auto;
          min-height: auto;
          max-height: auto;
        }
        .md-wrapper {
          display: block;
          width: 100%;
          padding: 0 0 2rem 0;
          vertical-align: baseline;
        }
      }
    `}</style>
  </div>

import PageHeader from 'components/page-header'
import MdContent from 'components/md-content'

export default ({ source, title, mdStyle }) =>
  <div className='background-wrapper'>
    <div className='content-wrapper' style={{ padding: '80px 0 0 0' }}>
      <PageHeader title={title} />
      <div className='md-wrapper'>
        <MdContent className={mdStyle} source={source} />
      </div>
      <div className='element-wrapper' />
    </div>
    <style jsx>{`
      .background-wrapper {
        background: url('/static/footers/line.png') bottom left repeat-x,
          url('/static/backgrounds/munka.png') top left repeat;
      }
      .element-wrapper {
        display: inline-block;
        background:
          url('/static/elements/munka.png') top right / contain no-repeat;
        width: 45vw;
        max-width: 450px;
        height: 60vw;
        max-height: 600px;
        margin: -70px 0 0 0;
      }
      .md-wrapper {
        display: inline-block;
        width: 41vw;
        vertical-align: top;
        padding: 0 0 2rem 0;
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
          vertical-align: baseline;
        }
      }
    `}</style>
  </div>

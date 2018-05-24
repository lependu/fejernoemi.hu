import PageHeader from 'components/page-header'
import MdContent from 'components/md-content'

export default ({ source, title }) =>
  <div className='background-wrapper'>
    <div className='content-wrapper' style={{ padding: '80px 0 0 0' }}>
      <PageHeader title={title} />
      <div className='element-wrapper'>
        <div className='md-wrapper'>
          <MdContent source={source} />
        </div>
      </div>
    </div>
    <style jsx>{`
      .background-wrapper {
        background: url('/static/footers/home.png') bottom left no-repeat,
          url('/static/backgrounds/home.png') top left repeat;
      }
      .element-wrapper {
        background:
          url('/static/elements/home.png') bottom left / 100% auto no-repeat;
        height: 48vw;
        min-height: 380px;
        max-height: 480px

      }
      .md-wrapper {
        width: 35%;
        margin: 1rem 0 1rem 65%
      }
      @media screen and (max-width: 799px) {
        .background-wrapper {
          background: url('/static/footers/line.png') bottom left repeat-x,
            url('/static/backgrounds/home.png') top left repeat;
        }
        .element-wrapper {
          background: none;
          height: auto;
          min-height: auto;
          max-height: auto;
        }
        .md-wrapper {
          width: 100%;
          margin: 0;
        }
      }
    `}</style>
  </div>

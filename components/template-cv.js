import MdContent from 'components/md-content'

export default ({ source, title }) =>
  <div className='background-wrapper'>
    <div className='content-wrapper' style={{ padding: '2rem 0' }}>
      <div className='title-wrapper'>
        <h2>{title}</h2>
        <img src='/static/elements/portre.png'
          className='home-img'
          alt='fejer-noemi-portre' />
      </div>
      <div className='md-wrapper'>
        <MdContent source={source} />
      </div>
    </div>
    <style jsx>{`
      .background-wrapper {
        background: url('/static/footers/line.png') bottom left repeat-x,
          url('/static/backgrounds/white.png') top left;
      }
      .title-wrapper {
        display: inline-block;
        width: 37.5%;
        vertical-align: top;
      }
      .home-img {
        display: block;
        width: 90%;
        max-width: 300px;
        margin: 2rem auto 0 0;
      }
      .md-wrapper {
        display: inline-block;
        width: 62.5%;
      }
      @media screen and (max-width: 799px) {
        .title-wrapper, .md-wrapper {
          display: block;
          width: 100%;
        }
        .home-img {
          display: none;
        }
      }
    `}</style>
  </div>

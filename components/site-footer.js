import t from 'lib/translate'
const year = new Date().getFullYear()

export default () =>
  <footer>
    <div className='content-wrapper footer-wrapper'>
      <p>{t('web')}-{year}</p>
      <p>{t('design')}</p>
    </div>
    <style jsx>{`
      footer {
        background: url('/static/backgrounds/footer.png') bottom left repeat;
      }
      .footer-wrapper {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         align-items: center;
         min-height: 80px
      }
      p {
       flex: 0 0 auto;
      }
      @media screen and (max-width: 799px) {
        p {
         flex: 1 0 100%;
        }
      }
    `}</style>
  </footer>

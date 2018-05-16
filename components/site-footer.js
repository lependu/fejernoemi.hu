const year = new Date().getFullYear()

const background = `url('/static/backgrounds/footer.png') bottom left repeat`

const wrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '80px'
}

const childMobile = {
  flex: '1 0 100%'
}

const childDesktop = {
  flex: '0 0 auto'
}

export default ({ isMobile }) =>
  <footer style={{ background }}>
    <div className='content-wrapper' style={wrapperStyle}>
      <p style={isMobile ? childMobile : childDesktop}>
        FEJÉR NOÉMI HONLAPJA 2013-{year}
      </p>
      <p style={isMobile ? childMobile : childDesktop}>
        DESIGN: SZONJA KISS
      </p>
    </div>
  </footer>

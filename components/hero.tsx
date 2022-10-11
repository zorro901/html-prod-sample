import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect'

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 672px)',
  })
  return (
    <div className={'w-full'}>
      {isDesktopOrLaptop ? <PCImage /> :
      isMobile ? <SmartPhoneImage /> : <PCImageSmall/>}
    </div>
  )
}

export default Hero

const PCImage = () => (
  <img
    style={{
      // height: '606px',
      height: '65vh',
      width: '100vw',
      objectFit: 'cover',
    }}
    src='/assets/mainvisual.jpg'
    alt='main-visual-md'
    height={606}
    // width={1920}
  />
)

const SmartPhoneImage = () => (
    <img
      style={{
        height: '111vh',
        objectFit: 'cover',
        objectPosition: '50% 50%',
      }}
      src='/assets/mainvisual.jpg'
      alt='main-visual-sm'
    />
)

const PCImageSmall = () => (
  <img
    style={{
      height: '95vh',
      objectFit: 'cover',
      objectPosition: '50% 50%'
    }}
    src='/assets/mainvisual.jpg'
    alt='main-visual-sm'
  />
)

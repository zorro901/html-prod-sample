import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { useWindowSize } from '../utls/useWindowSize'

const MainVisual = styled.img.attrs<{ customHeight: number }>((props) => ({
  src: props.src,
}))<{ customHeight: number }>`
  width: 100vw;
  height: 606px;
  object-fit: cover;
  max-width: 1920px;
`

const MainVisualSM = styled.img.attrs<{ customHeight: number }>((props) => ({
  src: props.src,
}))<{ customHeight: number }>`
  height: calc(${(props) => props.customHeight + 'px'} - 60px);
  object-fit: cover;
`

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 672px)',
  })
  const [, height] = useWindowSize()
  return (
    <div className={'w-full'}>
      {isDesktopOrLaptop ? (
        <MainVisual
          src={'/assets/mainvisual.jpg'}
          customHeight={height}
        />
      ) : (
        <MainVisualSM
          src={'/assets/mainvisual.jpg'}
          customHeight={height}
        />
      )}
    </div>
  )
}

export default Hero

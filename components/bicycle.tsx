import { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const Bicycle = () => {
  return (
    <section className={'mx-[30px] flex flex-col items-center'}>
      <div className={'pt-[100px]'}>
        <h1
          id={'bicycle'}
          className={
            'mb-[60px] text-center text-[32px] ' +
            'font-bold leading-normal tracking-normal ' +
            'border-b-[1px] border-b-black'
          }>
          Bicycle
        </h1>
      </div>
      <div className={'md:flex md:space-x-3'}>
        <BicyclePicture bicycleNum={1} />
        <BicyclePicture bicycleNum={2} />
        <BicyclePicture bicycleNum={3} />
      </div>
    </section>
  )
}

type Props = {
  bicycleNum: number
}

const Picture = styled.img.attrs((props) => ({
  src: props.src,
}))`
  object-fit: cover;
  max-height: 175px;
  max-width: 100%;
`
const PictureSM = styled.img.attrs((props) => ({
  src: props.src,
}))`
  object-fit: cover;
  max-width: 100%;
`

const BicyclePicture: FC<Props> = ({ bicycleNum }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 672px)',
  })
  return (
    <div className={'mb-[30px] flex flex-col items-center justify-center'}>
      {isDesktopOrLaptop ? (
        <Picture src={`/assets/bicycle${bicycleNum}.jpg`} />
      ) : (
        <PictureSM src={`/assets/bicycle${bicycleNum}.jpg`} />
      )}

      <div className={'flex flex-col'}>
        <h3 className={'mt-4 mb-[10px] text-center font-bold'}>タイトル タイトル</h3>
        <p className={'text-sm'}>テキストテキストテキスト</p>
      </div>
    </div>
  )
}

export default Bicycle

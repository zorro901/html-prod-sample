import Image from 'next/image'

const About = () => {
  return (
    <section className={'flex justify-center'}>
      <div
        className={
          'mx-[19px] flex max-w-[960px] flex-col items-center md:mx-[30px] md:min-w-[584px]'
        }>
        <div className={'w-full'}>
          <div className={'mt-[86px] flex justify-center'}>
            <h1
              id={'about'}
              className={
                'w-fit border-b-[1px] border-b-black text-[32px] font-bold leading-normal tracking-normal'
              }>
              About
            </h1>
          </div>

          <div
            className={
              'mt-[60px] flex h-[209px] md:h-[109px] min-h-[105px] flex-col items-center md:mt-[60px] md:flex-row'
            }>
            <div className={'w-[100px]'}>
              <Image
                style={{ borderRadius: '50%' }}
                src={'/assets/about.jpg'}
                height={100}
                width={100}
                alt={'person'}
              />
            </div>
            <div className={'md:ml-[30px]'}>
              <h2 className={'my-[10px] text-left font-bold'}>KAKERU MIYAICHI</h2>
              <p className={'text-sm md:w-[403px]'}>
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className={'text-sm md:w-[403px]'}>
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className={'text-sm md:w-[403px]'}>
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

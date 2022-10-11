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
                'w-fit border-b-[1px] border-b-black text-center text-[32px] font-bold leading-normal tracking-normal'
              }>
              About
            </h1>
          </div>

          <div
            className={
              'mt-[60px] flex h-[209px] ' + 'flex-col items-center justify-center md:flex-row'
            }>
            <Image
              style={{ borderRadius: '50%' }}
              src={'/assets/about.jpg'}
              height={100}
              width={100}
            />
            <div className={'flex flex-col md:ml-[30px]'}>
              <h3 className={'my-[10px] text-left font-bold'}>KAKERU MIYAICHI</h3>
              <p className={'w-[403px] text-sm'}>
                テキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキスト
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

import Image from "next/image";

const About = () => {
  return (
    <section className={'mx-[19px] md:mx-[30px] flex flex-col items-center'}>
      <div className={'mt-[86px]'}>
        <h1 id={'about'}
            className={'text-[32px] font-bold leading-normal tracking-normal text-center underline decoration-[.5px] underline-offset-[12px]'}>
          About</h1>
      </div>
      <div className={'flex flex-col justify-center items-center mt-[60px] md:flex-row h-[209px] w-[445px]'}>
        <Image
          style={{ borderRadius: '50%' }}
          src={'/assets/about.jpg'} height={100} width={100}
        />
        <div className={'flex flex-col w-[403px] md:ml-[30px]'}>
          <h3 className={'my-[10px] text-left font-bold'}>KAKERU MIYAICHI</h3>
          <p className={'text-sm'}>テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </section>
  );
}

export default About;

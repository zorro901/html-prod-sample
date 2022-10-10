import Image from "next/image";

const About = () => {
  return (
    <section className={'mx-[30px] flex flex-col items-center'}>
      <div className={'pt-[86px]'}>
        <h1
          className={'text-[32px] font-bold leading-normal tracking-normal text-center underline decoration-[.5px] underline-offset-[12px]'}>About</h1>
      </div>
      <div className={'flex flex-col justify-center items-center mt-[60px]'}>
        <Image
          style={{ borderRadius: '50%' }}
          src={'/assets/about.jpg'} height={99} width={99}
        />
        <div className={'flex flex-col'}>
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

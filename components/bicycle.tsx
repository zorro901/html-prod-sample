import Image from "next/image";
import { FC } from "react";

const Bicycle = () => {
  return (
    <section className={'mx-[30px] flex flex-col items-center'}>
      <div className={'pt-[86px]'}>
        <h1
          className={'text-[32px] font-bold leading-normal tracking-normal text-center underline decoration-[.5px] underline-offset-[12px] mb-[60px]'}>
          Bicycle
        </h1>
      </div>
      <BicyclePicture bicycleNum={1}/>
      <BicyclePicture bicycleNum={2}/>
      <BicyclePicture bicycleNum={3}/>
    </section>
  );
}

type Props = {
  bicycleNum: number;
};

const BicyclePicture: FC<Props> = ({bicycleNum}) => {
  return (
    <div className={'flex flex-col justify-center items-center mb-[30px]'}>
      <Image
        src={`/assets/bicycle${bicycleNum}.jpg`} height={424} width={640}
      />
      <div className={'flex flex-col'}>
        <h3 className={'mt-4 mb-[10px] text-center font-bold'}>タイトル タイトル</h3>
        <p className={'text-sm'}>テキストテキストテキスト</p>
      </div>
    </div>
  );
}

export default Bicycle;

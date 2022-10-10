import Image from "next/image";

const Header = () => {
  return (
    <header className={'flex px-[37px] justify-between items-center'}>
      <div>
        <Image src={'/assets/logo.svg'} width={120} height={60}/>
      </div>
      <ul className={'flex text-[14.4px] font-meiryo'}>
        <li className={'ml-[30px]'}>About</li>
        <li className={'ml-[30px]'}>Bicycle</li>
      </ul>
    </header>
  );
}

export default Header;

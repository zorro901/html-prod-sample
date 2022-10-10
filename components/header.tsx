import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      className={
        '' +
        'flex px-[19px] md:px-[37px] ' +
        'h-[60px] items-center justify-between'
      }>
      <div className={'h-[60px]'}>
        <Link href={'/'}>
          <a>
            <Image
              src={'/assets/logo.svg'}
              width={120}
              height={60}
            />
          </a>
        </Link>
      </div>
      <ul className={'flex font-meiryo text-[14.4px]'}>
        <li className={'ml-[30px]'}>
          <Link href={'/#about'}>
            <a>About</a>
          </Link>
        </li>
        <li className={'ml-[30px]'}>
          <Link href={'/#bicycle'}>
            <a>Bicycle</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header

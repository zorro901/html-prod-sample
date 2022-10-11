import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={'flex h-[60px] justify-between px-[19px] md:justify-evenly md:px-[37px]'}>
      <div className={'flex w-full items-center justify-between md:max-w-[960px]'}>
        <div className={'h-[60px]'}>
          <Link href={'/'}>
            <a>
              <Image
                src={'/assets/logo.svg'}
                width={120}
                height={60}
                alt='Profile'
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
      </div>
    </header>
  )
}

export default Header

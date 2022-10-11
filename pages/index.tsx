import type { NextPage } from 'next'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Bicycle from '../components/bicycle'
import Footer from '../components/footer'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect'

const Home: NextPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 672px)',
  })
  return (
    <div className={`font-meiryo text-[#383e45] ${!isMobile && 'w-fit'}
    ${isDesktopOrLaptop && !isMobile ? '' : 'w-[120vw]'} `}>
      <Header />
      <main>
        <Hero />
        <About />
        <Bicycle />
      </main>
      <Footer />
    </div>
  )
}

export default Home

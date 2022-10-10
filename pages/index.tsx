import type { NextPage } from 'next'
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";

const Home: NextPage = () => {
  return (
    <div className={'h-[200vh] font-meiryo'}>
      <Header />
      <main>
        <Hero/>
        <About/>
      </main>
      <div className={'h-3'}>footer</div>
    </div>
  );
}

export default Home

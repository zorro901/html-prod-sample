import type { NextPage } from 'next'
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Bicycle from "../components/bicycle";

const Home: NextPage = () => {
  return (
    <div className={'h-[200vh] font-meiryo'}>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Bicycle/>
      </main>
      <div className={'h-3'}>footer</div>
    </div>
  );
}

export default Home

import type { NextPage } from 'next'
import Header from "../components/header";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <div className={'h-[200vh]'}>
      <Header />
      <main>
        <Hero/>
      </main>
      <div className={'h-3'}>footer</div>
    </div>
  );
}

export default Home

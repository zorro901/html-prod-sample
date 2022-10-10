import type { NextPage } from 'next'
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Bicycle from "../components/bicycle";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={'h-[200vh] font-meiryo'}>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Bicycle/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home

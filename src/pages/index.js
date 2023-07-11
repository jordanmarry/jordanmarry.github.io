import Head from 'next/head';
import Intro from "../components/Intro";
import About from "../components/About";
// import Experience from '../components/Experience';
// import Project from '../components/Project';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jordan</title>
        <meta name="description" content="I'm a aspiring software engineer that wants to innovative and helpful applications." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Intro />
      <About />
      {/* <Experience />
      <Project />
      <Footer /> */}
    </div>
  )
}
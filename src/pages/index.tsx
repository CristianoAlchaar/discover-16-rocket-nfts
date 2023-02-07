import BannerTop from '@/components/BannerTop'
import BestArtists from '@/components/BestArtists'
import FooterMain from '@/components/FooterMain'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Info from '@/components/Info'
import PopularThisWeek from '@/components/PopularThisWeek'
import { TopContainer } from '@/styles/pages/home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopContainer>
        <header>
          <Header />
          <BannerTop />
          <Gallery />
        </header>
      </TopContainer>
      <main>
        <Info />
        <PopularThisWeek />
        <BestArtists />
      </main>
      <FooterMain />
    </>
  )
}

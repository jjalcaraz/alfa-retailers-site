import type { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/seo-utils'
import { archivo, plexMono } from '@/components/home/fonts'
import styles from '@/components/home/home.module.css'
import { HomeHeader } from '@/components/home/header'
import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { Projects } from '@/components/home/projects'
import { Process } from '@/components/home/process'
import { Contact } from '@/components/home/contact'
import { HomeFooter } from '@/components/home/footer'
import { RevealObserver } from '@/components/home/reveal-observer'

const CANONICAL = getCanonicalUrl('/')
const TITLE = 'Alfa Retailers LLC | AI Automation & Projects'
const DESCRIPTION =
  'Alfa Retailers LLC is a San Antonio, Texas studio building practical AI automation and custom software for local businesses.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: CANONICAL,
    siteName: 'Alfa Retailers LLC',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function Home() {
  return (
    <div className={`${archivo.variable} ${plexMono.variable} ${styles.root}`}>
      <HomeHeader />
      <main id="top" className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <HomeFooter />
      <RevealObserver />
    </div>
  )
}

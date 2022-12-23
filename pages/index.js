import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred Bliss</title>
        <meta name="description" content="Fred Bliss - CTO, founder, and AI/ML enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Image src="/profile.png" alt="Profile picture" width={250} height={250} />
          <h1 className={styles.title}>Fred Bliss</h1>
          <p className={styles.description}>
            CTO of all things data, intersection of B2B and AI <br />
            Founder @ Aptitive (acquired by 2nd Watch) <br />
            AI/ML/LLM enthusiast, building in open, impacts on enterprise
          </p>
        </div>
        <hr />
        <p>Points of view and curated links across the intersection of AI, data, and B2B enterprise</p>
        <div className={styles.socialLinks}>
          <a href="https://post.news/fredbliss">post.news/fredbliss</a>
          <a href="https://twitter.com/fblissjr">twitter.com/fblissjr</a>
          <a href="https://linkedin.com/in/fbliss">https://linkedin.com/in/fbliss</a>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

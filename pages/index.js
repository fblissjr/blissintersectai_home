import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred Bliss</title>
        <meta name="description" content="Fred Bliss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Fred Bliss</a>
        </h1>

        <p className={styles.description}>
          <span className={styles.description}>
            <Image src="/profile.png"  alt="Bliss Intersect Logo" width={250} height={250}/>
             
              <h2 className={styles.description}>
                <a>
                🔎 CTO of all things data, intersection of B2B and AI<br></br>
                🚀 Founder @ Aptitive (acquired by 2nd Watch)<br></br>
                💡 AI/ML/LLM enthusiast, building in open, impacts on enterprise
                </a>
        
          <div style={{ padding: 30 }}>
          <Link href="https://fredbliss.substack.com/?utm_source=home">
            <a style={{
              textDecoration: 'underline',
              color: 'blue',
            }}>
              Newsletter - Points of view and curated links across the intersection of AI, data, and B2B enterprise
            </a>
          </Link>
          </div>
              </h2>
              <body>
                <a href="https://linkedin.com/in/fbliss">LinkedIn (@fbliss)</a>
                <a href="https://www.threads.net/@fblissjr">Threads (@fblissjr)</a>
                <a href="https://twitter.com/fblissjr">Twitter (@fblissjr)</a><br></br>
                <a href="https://post.news/fredbliss">Post (@fredbliss)</a><br></br>
              </body>
          </span>
        </p>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

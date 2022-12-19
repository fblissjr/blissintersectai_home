import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bliss Intersect</title>
        <meta name="description" content="The Bliss Intersect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>The Bliss Intersect</a>
        </h1>

        <p className={styles.description}>
          <span className={styles.description}>
            <Image src="/profile.png"  alt="Bliss Intersect Logo" width={500} height={500}/>
             
              <h2 className={styles.description}>
                <a>Points of view and curated links across the intersection of AI, data, and B2B enterprise</a>
                <p><i><a href="https://post.news/fredbliss">post.news/fredbliss</a></i></p>
                <p><i><a href="https://twitter.com/fblissjr">twitter.com/fblissjr</a></i></p>
                <p><i><a href="https://linkedin.com/in/fbliss">https://linkedin.com/in/fbliss</a></i></p>
              </h2>
          </span>
        </p>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

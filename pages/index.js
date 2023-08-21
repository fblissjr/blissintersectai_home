import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred Bliss</title>
        <meta name="description" content="Fred Bliss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.main}>
        <h1 className={styles.title}>
          <a>Fred Bliss</a>
        </h1>
      </header>

      <section className={styles.description}>
        <Image src="/profile.png" alt="Bliss Intersect Logo" width={250} height={250} />

        <h2 className={styles.subtitle}>
          🔎 CTO of all things data, intersection of B2B and AI<br />
          🚀 Founder @ Aptitive (acquired by 2nd Watch)<br />
          💡 AI/ML/LLM enthusiast, building in open, impacts on enterprise
        </h2>

        <div className={styles.linkContainer}>
          <Link href="https://fredbliss.substack.com/?utm_source=home">
            <a className={styles.newsletterLink}>
              Newsletter - Points of view and curated links across the intersection of AI, data, and B2B enterprise
            </a>
          </Link>
        </div>

        <div className={styles.contactLinks}>
          <a href="https://linkedin.com/in/fbliss">LinkedIn (@fbliss)</a><br />
          <a href="https://www.threads.net/@fblissjr">Threads (@fblissjr)</a><br />
          <a href="https://twitter.com/fblissjr">Twitter (@fblissjr)</a><br />
          <a href="https://post.news/fredbliss">Post (@fredbliss)</a>
        </div>
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}

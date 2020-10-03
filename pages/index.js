import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MTM8</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <img class={styles.avatar} src='/img/avatar.jpg' />

        <h1 className={styles.title}>
          MTM8
        </h1>

        <p className={styles.description}>
          Developer
        </p>

        <div className={styles.grid}>
          <a href='#' className={styles.card}>
            <h3>Project thing &rarr;</h3>
            <p>Something something here later</p>
          </a>

          <a href='#' className={styles.card}>
            <h3>Project thing &rarr;</h3>
            <p>Something something here later</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
          Built with Next.js | View Source on Github
      </footer>
    </div>
  )
}

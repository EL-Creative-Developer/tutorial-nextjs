import Head from "next/head"
import styles from "../styles/Home.module.css"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>EL Creative Blog | Home</title>
        <meta name="description" content="Blog EL Creative Academy"></meta>
      </Head>

      <main className={styles.tengah}>
        <h1>Selamat Datang di EL Creative Academy</h1>
        <p>Ini adalah Blog yang dibuat dengan menggunakan Next.js</p>

        <Image src="/logo.png" width={150} height={150}></Image>
      </main>
    </>
  )
}

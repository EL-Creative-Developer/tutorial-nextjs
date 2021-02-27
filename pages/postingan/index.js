import Head from "next/head"
import styles from "../../styles/Postingan.module.css"

export const getStaticProps = async () => {
    // VARIABEL
    const respon = await fetch("https://www.elcreativeacademy.com/feeds/posts/summary/-/NextJS?alt=json");
    const data = await respon.json();

    // RETURN
    return {
        // PROPERTI
        props: { postingan: data.feed.entry }
    }
}

const Postingan = ({ postingan }) => {
    return (
        <>
            <Head>
                <title>EL Creative Blog | Postingan</title>
                <meta name="description" content="Blog EL Creative Academy"></meta>
            </Head>
            
            <main>
                <h1>Semua Postingan</h1>

                {postingan.map(post => (
                    <article className={ styles.artikel } key={ post.id.$t }>
                        <a><h2>{ post.title.$t }</h2></a>
                        <p>{ post.summary.$t }</p>
                    </article>
                ))}
            </main>
        </>
     );
}
 
export default Postingan;
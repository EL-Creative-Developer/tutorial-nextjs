import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const halamanError = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <title>EL Creative Blog | Error</title>
                <meta name="description" content="Blog EL Creative Academy"></meta>
            </Head>

            <main className="error">
                <h1>404</h1>
                <h2>Halaman yang kalian cari tidak ada.</h2>
                <p>Kembali ke <Link href="/"><a>Halaman Utama</a></Link>.</p>
            </main>
        </>
    );
}
 
export default halamanError;
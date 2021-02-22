import Link from "next/link"

const halamanError = () => {
    return (
        <main className="error">
            <h1>404</h1>
            <h2>Halaman yang kalian cari tidak ada.</h2>
            <p>Kembali ke <Link href="/"><a>Halaman Utama</a></Link>.</p>
        </main>
    );
}
 
export default halamanError;
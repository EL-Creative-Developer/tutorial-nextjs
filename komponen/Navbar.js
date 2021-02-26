import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Blog EL Creative</h1>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/tentang"><a>Tentang</a></Link>
            <Link href="/postingan"><a>Postingan</a></Link>
        </nav>
    );
}
 
export default Navbar;
import Link from 'next/link'
import styles from "../styles/Index.module.css";

const Navbar = () => (
    <div className={styles.navbar}>
        <Link href="/"><a> Home </a></Link> |
        <Link href="/register"><a> Register </a></Link>  |
        <Link href="/login"><a> Login </a></Link> |
        <Link href="/profile"><a> Profile </a></Link> | 
        <Link href="/foo"><a> Foo </a></Link> |
        <Link href="/pets"><a> Pets </a></Link> |
        <Link href="/admin"><a> Admin </a></Link> |
        <Link href="/getConfig"><a> Config </a></Link> | 
        <Link href="/logout"><a> Logout </a></Link> 
        
    </div>
)

export default Navbar
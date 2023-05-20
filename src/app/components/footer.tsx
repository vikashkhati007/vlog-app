import styles from "../styles/components/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footcontainer}>
        <p>My Social Medias -:</p>
        <div className={styles.iconcontainer}>
          <Link href="https://instagram.com/vikashkhati007">
        <Image width={25} height={25} alt="menu" src="/socialicons/instagram.png"/>
        </Link>
        <Link href="https://www.linkedin.com/in/vikashkhati007/">
        <Image width={25} height={25} alt="menu" src="/socialicons/linkedin.png"/>
        </Link>
        <Link href="https://github.com/vikashkhati007">
        <Image width={25} height={25} alt="menu" src="/socialicons/github.png"/>
        </Link>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
